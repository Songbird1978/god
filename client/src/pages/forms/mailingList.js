import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import './mail.css';
import { yupResolver } from '@hookform/resolvers/yup';
import GoToTop from '../../goToTop.js';


export const MailingList = () => {

    const schema = yup.object().shape({
        firstName: yup.string().required("Your First Name is Required"),
        surname: yup.string().required("Your Surname is Required"),
        email: yup.string().email().required("You must use a valid email address"),
    })

    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (

        <div className="absoluteBox" id="mailingListFormId">
            <div className="formOuterBox">
                <form onSubmit={handleSubmit(onSubmit)} className="formElements">
                    <h1>MAILING LIST</h1>
                    <p>Join my mailing list and I'll keep you up to date with offers and events!</p>
                    <label htmlFor="firstName" >First Name:</label><br></br>
                    <input {...register("firstName")} type="text" id="firstName" placeholder="Your First Names..." ></input><br></br><br></br>
                    <p>{errors.firstName?.message} </p>
                    <label htmlFor="surname" >Surname:</label><br></br>
                    <input {...register("surname")} type="text" id="surname" placeholder="Your Surname ..."   ></input><br></br><br></br>
                    <p>{errors.surname?.message}</p>
                    <label htmlFor="email" >Email:</label><br></br>
                    <input {...register("email")} type="email" id="email" placeholder="Your Email Address..."  ></input><br></br><br></br>
                    <p>{errors.email?.message}</p>
                    <input type="submit" className="submit" name="submit"></input><br></br><br></br>
                </form>
            </div>
            <GoToTop />
        </div>
    )
}

export default MailingList;