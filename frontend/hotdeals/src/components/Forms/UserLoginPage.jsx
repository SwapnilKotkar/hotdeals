import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";


const UserLoginPage = () => {
    const link = "";
    const history = useNavigate();

    const [login, setLogin] = useState({
       email: "",
       password: "" 
    });

    const [loginRecord, setLoginRecord] = useState([]);

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setLogin({...login, [name]: value});
    }

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async () =>{
        setLoginRecord([...loginRecord, login])
        setLogin({
            email: "",
            password: "" 
         });

         const {email, password} = login;

        const res = await fetch('/signin', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const data = res.json();

        if(res.status === 400 || !data) {
            window.alert("login failed");
        }else{
            window.alert("login success");
            history("/");
        }
    }

    return(
        <>
            <div className="login-form">
            <div className="container d-flex justify-content-center mb-4">
                <span className="fs-3 fw-bolder" style={{fontWeight:"400", color:"black"}}>Sign in to an account</span>
                </div>
                <div className="d-flex justify-content-center">
                <form method="POST" className='rounded-5' onSubmit={handleSubmit(onSubmit)} style={{backgroundColor:"white", color:"black", fontWeight:"500"}}>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="email" className="form-control rounded-5" name="email" placeholder="Email" ref={register({ required: "Email is required", pattern: { value: /\S+@\S+\.\S+/i, message: "This is not a valid email" }})} value={login.email} onChange={handleChange} />
                        <p className="warning">{errors.email?.message}</p>
                    </div>
                    <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control rounded-5" name="password" placeholder="Password" ref={register({ required: "password is required" })} value={login.password} onChange={handleChange} />
                            <p className="warning">{errors.password?.message}</p>
                    </div>   
                    <div className="clearfix mb-2">
                        <label className="float-left form-check-label p-1"><input type="checkbox" required /> Remember me</label>
                        <a href={link} className="float-right text-primary">Forgot Password?</a>
                    </div>       
                    <div className="form-group">
                        <button type="submit" className="container btn btn-primary btn-block login-btn"><span className="text-capitalize" style={{fontSize:"14px", fontWeight:"500"}}>Sign in</span></button>
                    </div>
                    
                    <div className="hint-text mt-3">Don't have an account? <NavLink to="/signup" className="text-primary">Register Now!</NavLink></div>     
                <hr className="container m-0"/>
                    <div className="container-sm d-flex justify-content-center">
                        <NavLink to="/" className="nav-link p-2 text-primary">Home</NavLink>
                        <NavLink to="/adminlogin" className="nav-link p-2 text-primary">Admin Login</NavLink>
                </div>           
                </form>        
                </div>
            </div>            
        </>
    );
}

export default UserLoginPage;