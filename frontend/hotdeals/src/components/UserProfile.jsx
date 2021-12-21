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
            <div className="container mt-5 mb-5" style={{height: "100vh"}}>
            <div className="row gutters p-5">
            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="card h-100 shadow rounded-3 p-4">
                <div className="card-body">
                    <div className="account-settings">
                        <div className="user-profile">
                            <h5 className="user-name">Yuki Hayashi</h5>
                            <h6 className="user-email">yuki@Maxwell.com</h6>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="user-name mb-0">Yuki Hayashi</p>
                            <p className="user-email">yuki@Maxwell.com</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="card h-100 shadow rounded-3 p-4">
                <form method='POST' onSubmit={handleSubmit(onSubmit)} noValidate className="card-body">
                    <div className="row gutters">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                            <h6 className="mb-2 text-primary">Personal Details</h6>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
                        <div className="form-group">
                    <input type="text" className="form-control" name="firstName" placeholder="first name" ref={register({ required: "first name is required" })} value={values.firstName} onChange={handleChange} />
                    <p className="warning">{errors.firstName?.message}</p>
                </div>
                        <div className="form-group">
                <input type="text" className="form-control" name="lastName" placeholder="last name" ref={register({ required: "last name is required" })} value={values.lastName} onChange={handleChange} />
                <p className="warning">{errors.lastName?.message}</p>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" name="email" placeholder="email" ref={register({ required: "email is required", pattern: { value: /\S+@\S+\.\S+/i, message: "This is not a valid email" }})} value={values.email} onChange={handleChange} />
                    <p className="warning">{errors.email?.message}</p>
                </div>
                </div>      
                    </div>
                    <div className="row gutters mt-5">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                            <h6 className="mb-2 text-primary">Change password</h6>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
                
                <div className="form-group">
                    <input type="password" className="form-control" name="password" placeholder="Enter old password" ref={register({ required: "Password is required", minLength: {value: 4, message: "Password must be more than 4 characters" }, maxLength: { value: 10, message: "Password cannot exceed more than 10 characters" }})} value={values.password} onChange={handleChange} />
                    <p className="warning">{errors.password?.message}</p>
                </div> 
                <div className="form-group">
                    <input type="password" className="form-control" name="newpassword" placeholder="Enter new password" ref={register({ required: "Password is required", minLength: {value: 4, message: "Password must be more than 4 characters" }, maxLength: { value: 10, message: "Password cannot exceed more than 10 characters" }})} value={values.newpassword} onChange={handleChange} />
                    <p className="warning">{errors.password?.message}</p>
                </div> 
                </div>      
                    </div>
                    <div className="row gutters mt-3">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="text-right m-lg-auto">
                                <button type="submit" id="submit" name="submit" className="btn btn-primary">Update</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            </div>
            </div>
            </div>
            <Footer/>
        </>
    );

}

export default UserProfile;