import React from "react";
import { NavLink } from "react-router-dom";
 
 const ErrorPage = () =>{
    return(
        <>
            <div className="container " >
                <div className="container col d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
                    <div className="container card-body">
                        <h5 className="card-title fs-3 d-flex justify-content-center align-items-center">Oops Page not found!</h5>
                        <h1 className="card-title display-1 d-flex justify-content-center align-items-center">404 Error</h1>
                        <p className="card-text fs-6 d-flex justify-content-center align-items-center">The page you are looking for does not exist or an other error occured!</p>
                        <NavLink className="d-flex justify-content-center align-items-center" to='/'><button className="btn btn-primary">Go to homepage</button></NavLink>
                    </div>
                </div>
            </div>
        </>
    );
 }

 export default ErrorPage;