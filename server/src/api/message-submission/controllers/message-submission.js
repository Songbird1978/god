'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::message-submission.message-submission', ({ strapi }) => ({
    async create(ctx) {
        const { data } = ctx.request.body;

        console.log('Request body:', ctx.request.body);

        if (!data) {
            return ctx.badRequest('Missing "data" payload in the request body');
        }

        const { recaptchaToken, ...formData } = data;

        if (!recaptchaToken) {
            return ctx.badRequest('Missing reCAPTCHA token');
        }

        const secretKey = process.env.RECAPTCHA_SECRET_KEY;

        try {
            const params = new URLSearchParams();
            params.append('secret', secretKey);
            params.append('response', recaptchaToken);

            const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: params.toString(),
            });

            const json = await response.json();

            if (!json.success || (json.score && json.score < 0.5)) {
                return ctx.badRequest('Failed reCAPTCHA verification');
            }

            // Replace token-containing data with clean formData
            ctx.request.body.data = formData;

            return await super.create(ctx);

        } catch (error) {
            strapi.log.error('reCAPTCHA verification error:', error);
            return ctx.internalServerError('Error verifying reCAPTCHA');
        }
    },
}));
