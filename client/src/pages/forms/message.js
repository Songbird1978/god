import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import './mail.css';
import { yupResolver } from '@hookform/resolvers/yup';
import GoToTop from '../../goToTop.js';



export const Message = () => {
    const [recaptchaToken, setRecaptchaToken] = useState(null);


    const schema = yup.object().shape({
        firstName: yup.string().required("Your First Name is Required"),
        surname: yup.string().required("Your Surname is Required"),
        email: yup.string().email().required("You must use a valid email address"),
        message: yup.string().required("You must type a message"),
    })

    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = async (data) => {
        if (!recaptchaToken) {
            alert("Please complete the CAPTCHA");
            return;
        }

        try {
            const response = await fetch('http://localhost:1337/api/message-submissions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: {
                        ...data,
                        recaptchaToken
                    }
                }),
            });

            if (!response.ok) throw new Error("Submission failed");

            const result = await response.json();
            console.log("Successfully submitted!", result);
            alert("Email sent!");
        } catch (error) {
            console.error("Error submitting email:", error);
            alert("Error sending your email.");
        }
    };

    const handleCaptchaChange = (token) => {
        setRecaptchaToken(token);
    };

    return (

        <div className="absoluteBox" id="messageFormId">

            <div className="formOuterBox">
                <form onSubmit={handleSubmit(onSubmit)} className="formElements" >
                    <h1>CONTACT ME</h1>
                    <p>Send me a message! I'll get back to you ASAP!</p>
                    <label htmlFor="firstName" >First Name:</label><br></br>
                    <input {...register("firstName")} type="text" id="firstName" placeholder="Your First Names..." ></input><br></br><br></br>
                    <label htmlFor="surname" >Surname:</label><br></br>
                    <input {...register("surname")} type="text" id="surname" placeholder="Your Surname..." ></input><br></br><br></br>
                    <label htmlFor="email" >Email</label><br></br>
                    <input {...register("email")} type="email" id="email" placeholder="Your Email..." ></input><br></br><br></br>
                    <label htmlFor="message" >Message:</label><br></br>
                    <textarea {...register("message")} type="messsage" id="message" placeholder="Type your message here..." rows="6" maxLength="3000"></textarea><br></br><br></br>
                    <p>{errors.email?.message}</p>


                    <ReCAPTCHA
                        className="reCaptcha"
                        sitekey="6LeVK2grAAAAADLvjZlJpuEKJJG627TzKk5dpgOc"
                        onChange={handleCaptchaChange}
                        size="compact"
                    /><br />

                    <input type="submit" name="Submit" ></input><br></br><br></br>
                </form>
            </div>
            <GoToTop />
        </div>
    )
}

export default Message;