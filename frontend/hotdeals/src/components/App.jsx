// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { createContext, useReducer } from "react";
import { Routes, Route } from 'react-router-dom';
import HomePage from "./HomePage";
import ErrorPage from "./ErrorPage";
import UserLoginPage from "./Forms/UserLoginPage";
import SignUpPage from './Forms/SignUpPage';
import AdminLoginPage from "./Forms/AdminLoginPage";
import DealSubmit from "./Forms/DealSubmit";
import DealDetails from "./DealDetails";
import UserProfile from "./UserProfile";
import AdminProfile from "./AdminProfile";
import UserLogout from "./UserLogout";
import AdminLogout from "./AdminLogout";
// import { initialState, reducer } from "../reducer/useReducer";

// export const userContext = createContext();

const App = () =>{
    // const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <>
        {/* <userContext.Provider value={{state, dispatch}}> */}
        <Routes>
            <Route exact path='/' element={<HomePage/>} />
            <Route exact path='/userlogin' element={<UserLoginPage/>} />
            <Route exact path='/signup' element={<SignUpPage/>} />
            <Route exact path='/adminlogin' element={<AdminLoginPage/>} />
            <Route exact path='/submitdeal' element={<DealSubmit/>} />
            <Route exact path='/dealdetails' element={<DealDetails/>} />
            <Route exact path='/userprofile' element={<UserProfile/>} />
            <Route exact path='/adminprofile' element={<AdminProfile/>} />
            <Route exact path='/userlogout' element={<UserLogout/>} />
            <Route exact path='/adminlogout' element={<AdminLogout/>} />
            <Route path='*' element={<ErrorPage/>} />
        </Routes>
        {/* </userContext.Provider> */}
        </>
    );
}

export default App;