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
                <form method="POST" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-center">User Login</h2>		
                    {/* <div className="text-center social-btn">
                        <a href={link} className="container btn btn-primary btn-block text-center">Sign in with <b>Facebook</b></a>
                        <a href={link} className="container btn btn-danger btn-block text-center">Sign in with <b>Google</b></a>
                    </div>
                    <div className="or-seperator"><i>or</i></div> */}
                    <div className="form-group">
                        <input type="email" className="form-control" name="email" placeholder="Email" ref={register({ required: "Email is required", pattern: { value: /\S+@\S+\.\S+/i, message: "This is not a valid email" }})} value={login.email} onChange={handleChange} />
                        <p className="warning">{errors.email?.message}</p>
                    </div>
                    <div className="form-group">
                            <input type="password" className="form-control" name="password" placeholder="Password" ref={register({ required: "password is required" })} value={login.password} onChange={handleChange} />
                            <p className="warning">{errors.password?.message}</p>
                    </div>   
                    <div className="clearfix">
                        <label className="float-left form-check-label p-2"><input type="checkbox" required /> Remember me</label>
                        <a href={link} className="float-right text-success">Forgot Password?</a>
                    </div>       
                    <div className="form-group">
                        <button type="submit" className="container btn btn-success btn-block login-btn">Sign in</button>
                    </div>
                    
                    <div className="hint-text mt-3">Don't have an account? <NavLink to="/signup" className="text-success">Register Now!</NavLink></div>     
                    <div className="container-sm d-flex justify-content-center">
                        <NavLink to="/" className="nav-link p-2 text-muted text-decoration-underline">Home</NavLink>
                        <NavLink to="/adminlogin" className="nav-link p-2 text-muted text-decoration-underline">Admin Login</NavLink>
                </div>           
                </form>        
            </div>            
        </>
    );
}

export default UserLoginPage;