import Navbar from './Navbar';
import Footer from "./Footer";
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const AdminProfile = () => {
    const history = Navigate();

    const callAdminProfile = async () => {
        try {
            const res = await fetch('/adminprofile', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type" : "application/json"
                },
                credentials: "include"
            });

            // const data = await res.json(); 

            if(!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        }catch(err) {
            console.log(err);
            history('/adminlogin');
        }
    }

    useEffect( () => { 
        callAdminProfile();
    },[]);



    return(
        <>
            <Navbar />
            <div className="login-form">
                <form method="POST">
                    <h2 className="text-center">Admin Login</h2>		
                    {/* <div className="text-center social-btn">
                        <a href={link} className="container btn btn-primary btn-block text-center"> Sign in with <b>Facebook</b></a>
                        <a href={link} className="container btn btn-danger btn-block text-center"> Sign in with <b>Google</b></a>
                    </div>
                    <div className="or-seperator"><i>or</i></div> */}
                    {/* <div className="form-group">
                        <input type="email" className="form-control" name="email" placeholder="Email" ref={register({ required: "Email is required", pattern: { value: /\S+@\S+\.\S+/i, message: "This is not a valid email" }})} value={adminLogin.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                            <input type="password" className="form-control" name="password" placeholder="Password" ref={register({ required: "password is required" })} value={adminLogin.password} onChange={handleChange} />
                    </div> */}
                </form>        
            </div>
            <Footer/>
        </>
    );

}

export default AdminProfile;