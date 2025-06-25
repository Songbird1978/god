'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::mailing-list-submission.mailing-list-submission', ({ strapi }) => ({
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
            console.log('reCAPTCHA response:', json);

            if (!json.success) {
                return ctx.badRequest('Failed reCAPTCHA verification');
            }

            const existing = await strapi.db.query('api::mailing-list-submission.mailing-list-submission').findOne({
                where: { email: formData.email },
            });

            if (existing) {
                return ctx.badRequest('This email is already subscribed.');
            }

            ctx.request.body.data = formData;

            try {
                return await super.create(ctx);

            } catch (error) {
                const errorMessage = error?.message || '';

                if (errorMessage.toLowerCase().includes('unique')) {
                    return ctx.badRequest('This email is already subscribed.');
                }

                strapi.log.error('Error saving submission:', error);
                return ctx.internalServerError('Internal server error');
            }

        } catch (error) {

            strapi.log.error('reCAPTCHA verification error:', error);
            return ctx.internalServerError('Error verifying reCAPTCHA');
        }
    },
}));
