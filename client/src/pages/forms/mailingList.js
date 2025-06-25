import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import './mail.css';
import { yupResolver } from '@hookform/resolvers/yup';
import GoToTop from '../../goToTop.js';

export const MailingList = () => {
    const [recaptchaToken, setRecaptchaToken] = useState(null);

    const schema = yup.object().shape({
        firstName: yup.string().required("Your First Name is Required"),
        surname: yup.string().required("Your Surname is Required"),
        email: yup.string().email().required("You must use a valid email address"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        if (!recaptchaToken) {
            alert("Please complete the CAPTCHA");
            return;
        }

        try {

            const API_URL = process.env.REACT_APP_API_URL;

            const response = await fetch(`${API_URL}/api/mailing-list-submissions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: {
                        ...data,
                        recaptchaToken,
                    },
                }),
            });

            if (!response.ok) throw new Error("Failed to send");

            const result = await response.json();
            console.log("Successfully submitted!", result);
            alert("Message sent!");
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("There was a problem submitting your message.");
        }
    };

    const handleCaptchaChange = (token) => {
        setRecaptchaToken(token);
    };

    return (
        <div className="absoluteBox" id="mailingListFormId">
            <div className="formOuterBox">
                <form onSubmit={handleSubmit(onSubmit)} className="formElements">
                    <h1>MAILING LIST</h1>
                    <p>Join my mailing list and I'll keep you up to date with offers and events!</p>

                    <label htmlFor="firstName">First Name:</label><br />
                    <input {...register("firstName")} type="text" id="firstName" placeholder="Your First Names..." /><br /><br />
                    <p>{errors.firstName?.message}</p>

                    <label htmlFor="surname">Surname:</label><br />
                    <input {...register("surname")} type="text" id="surname" placeholder="Your Surname ..." /><br /><br />
                    <p>{errors.surname?.message}</p>

                    <label htmlFor="email">Email:</label><br />
                    <input {...register("email")} type="email" id="email" placeholder="Your Email Address..." /><br /><br />
                    <p>{errors.email?.message}</p>


                    <ReCAPTCHA
                        className="reCaptcha"
                        sitekey="6LeVK2grAAAAADLvjZlJpuEKJJG627TzKk5dpgOc"
                        onChange={handleCaptchaChange}
                        size="compact"
                        style={{ alignSelf: "center" }}
                    /><br />

                    <input type="submit" className="submit" name="submit" /><br /><br />
                </form>
            </div>
            <GoToTop />
        </div>
    );
};

export default MailingList;
