import Navbar from './Navbar';
import Footer from "./Footer";
import React, {useState} from 'react';
import { useForm } from "react-hook-form";
// import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

const UserProfile = () => {

    const history = useNavigate();

    
    const [values, setValues]= useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        newpassword:""
    });

    const [signinRecord, setSigninRecord]=useState([]);

    // const callUserProfile = async () => {
    //     try {
    //         const res = await fetch('/userprofile', {
    //             method: "GET",
    //             headers: {
    //                 Accept: "application/json",
    //                 "Content-Type" : "application/json"
    //             },
    //             credentials: "include"
    //         });

    //         const data = await res.json(); 
    //         console.log(data);

    //         if(!res.status === 200) {
    //             const error = new Error(res.error);
    //             throw error;
    //         }
    //     }catch(err) {
    //         console.log(err);
    //         history('/userlogin');
    //     }
    // };

    // useEffect(() => {
    //     callUserProfile();
    // }, []);

    const handleChange = (event) => {
        const {name, value} = event.target;

        setValues({...values, [name]:value});
    }

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async () => {
        setSigninRecord([...signinRecord, values]);
        setValues({
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            newpassword:""
        });     
        
        const {firstName, lastName, email, password, newpassword} = values;

        const res = await fetch('/register', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({ firstName, lastName, email, password,newpassword })
        });

        const data = await res.json();

        if(res.status === 422 || !data ) {
            window.alert("invalid registration");
            console.log("invalid registration");
        }else {
            window.alert("successfull registration");
            console.log("successfull registration");

            history("/userlogin");
        }
    };

    return(
        <>
            <Navbar />
            <div className="container-fluid mt-lg-5 mt-3 mb-lg-5 mb-3 d-flex justify-content-center" style={{maxWidth:"1000px"}}>
                <form method="POST" onSubmit={handleSubmit(onSubmit)} className="container rounded shadow-5 bg-white ">
                    <div className="row">
                        <div className="col-lg-4 col-md-5 border-right">
                            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" src="https://i.imgur.com/0eg0aG0.jpg" alt="profile pic" width="90" /><span className="font-weight-bold">John Tane</span><span className="text-black-50">john@gmail.com</span></div>
                        </div>
                        <div className="col-lg-8 col-md-7 col-sm-12">
                            <div className="p-3 py-5">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h6 className="text-right">Edit Profile</h6>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-lg-8 col-md-10 col-sm-12">
                                    <input name="firstName"  type="text" className="form-control rounded-3" placeholder="first name" ref={register({ required: "first name is required" })} value={values.firstName} onChange={handleChange} />
                                    <p className="warning">{errors.firstName?.message}</p>    
                                </div>
                                </div>
                                <div className="row mt-3">
                                <div className="col-lg-8 col-md-10 col-sm-12">
                                    <input name="lastName" type="text" className="form-control rounded-3" placeholder="lastname" ref={register({ required: "last name is required" })} value={values.lastName} onChange={handleChange} />
                                    <p className="warning">{errors.lastName?.message}</p>
                                </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-lg-8 col-md-10 col-sm-12">
                                    <input name="email" type="text" className="form-control rounded-3" placeholder="email" ref={register({ required: "email is required", pattern: { value: /\S+@\S+\.\S+/i, message: "This is not a valid email" }})} value={values.email} onChange={handleChange} />
                                    <p className="warning">{errors.email?.message}</p>    
                                </div>
                                </div>
                                <div className="row mt-3">
                                <div className="col-lg-8 col-md-10 col-sm-12">
                                    <input name="password" type="text" className="form-control rounded-3" placeholder="password" ref={register({ required: "password is required" })} value={values.password} onChange={handleChange} />
                                    <p className="warning">{errors.password?.message}</p>
                                </div>
                                </div>
                                <div className="mt-3 text-right"><button className="btn btn-primary profile-button" type="submit"><span className='text-capitalize'>Save Profile</span></button></div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <Footer/>
        </>
    );

}

export default UserProfile;