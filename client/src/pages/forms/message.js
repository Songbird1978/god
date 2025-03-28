import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import './mail.css';
import { yupResolver } from '@hookform/resolvers/yup';
import GoToTop from '../../goToTop.js';



export const Message = () => {


    const schema = yup.object().shape({
        firstName: yup.string().required("Your First Name is Required"),
        surname: yup.string().required("Your Surname is Required"),
        email: yup.string().email().required("You must use a valid email address"),
        message: yup.string().required("You must type a message"),
    })

    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {

        console.log(data);
    }


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
                    <input type="submit" name="Submit" ></input><br></br><br></br>
                </form>
            </div>
            <GoToTop />
        </div>
    )
}

export default Message;