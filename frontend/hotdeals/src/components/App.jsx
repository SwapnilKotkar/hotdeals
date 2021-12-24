// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Routes, Route } from 'react-router-dom';
import HomePage from "./HomePage";
import ErrorPage from "./ErrorPage";
import UserLoginPage from "./Forms/UserLoginPage";
import SignUpPage from './Forms/SignUpPage';
import AdminLoginPage from "./Forms/AdminLoginPage";
import DealSubmit from "./Forms/DealSubmit";
import UserProfile from "./UserProfile";
import AdminProfile from "./AdminProfile";
import UserLogout from "./UserLogout";
import AdminLogout from "./AdminLogout";


const App = () =>{
    return(
        <>
        <Routes>
            <Route exact path='/' element={<HomePage/>} />
            <Route exact path='/userlogin' element={<UserLoginPage/>} />
            <Route exact path='/signup' element={<SignUpPage/>} />
            <Route exact path='/adminlogin' element={<AdminLoginPage/>} />
            <Route exact path='/submitdeal' element={<DealSubmit/>} />
            <Route exact path='/userprofile' element={<UserProfile/>} />
            <Route exact path='/adminprofile' element={<AdminProfile/>} />
            <Route exact path='/userlogout' element={<UserLogout/>} />
            <Route exact path='/adminlogout' element={<AdminLogout/>} />
            <Route path='*' element={<ErrorPage/>} />
        </Routes>
        </>
    );
}

export default App;