import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () =>{
    const link = "#";
    
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-sm">
                <NavLink className="navbar-brand" to="/">hotDeals</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/userlogin">User Login</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/adminlogin">Admin Login</NavLink>
                    </li>  
                    {/* <li className="nav-item">
                    <NavLink className="nav-link" to="/userprofile">userHome</NavLink>
                    </li>  
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/adminprofile">adminHome</NavLink>
                    </li>  
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/userlogout">UserLogout</NavLink>
                    </li> 
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/adminlogout">AdminLogout</NavLink>
                    </li>   */}
                    <li class="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href='' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            User/Admin
                        </a>
                        <ul className="dropdown-menu p-0" aria-labelledby="navbarDropdown">
                            <li><NavLink className="dropdown-item" to='/userprofile'>Profile</NavLink></li>
                            <li><NavLink className="dropdown-item" to='/'>Logout</NavLink></li>
                        </ul>
                    </li>
                    <li>
                    <NavLink className="nav-link p-1" to="/submitdeal"><button className="btn btn-info" type="submit" >Submit Deal</button></NavLink>                
                    </li>      
                </ul>
                </div>
            </div>
            </nav>
            <nav className="navbar navbar-dark bg-dark ">
            <div className="container-fluid d-flex justify-content-center">
                <form className="d-flex col-12 col-sm-6">
                <input className="form-control me-2" type="search" placeholder="Search for hotdeal . . ." aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            </nav>

            <div className="container-fluid pt-2 pb-2 bg-light shadow-sm p-3 bg-body rounded category_bar">
            <div className="deals-bar container-sm d-flex justify-content-between">
            <div className="dropdown">
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Latest
                </button>
                <ul className="dropdown-menu mt-2" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href={link}>Trending</a></li>
                <li><a className="dropdown-item" href={link}>New</a></li>
                </ul>
            </div>
            <div className="dropdown">
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Category
                </button>
                <ul className="dropdown-menu mt-2" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href={link}>Fashion</a></li>
                <li><a className="dropdown-item" href={link}>Home & Living</a></li>
                <li><a className="dropdown-item" href={link}>Electronics</a></li>
                <li><a className="dropdown-item" href={link}>Groceries</a></li>
                <li><a className="dropdown-item" href={link}>Travel</a></li>
                <li><a className="dropdown-item" href={link}>Sports & Outdoors</a></li>
                <li><a className="dropdown-item" href={link}>Gaming</a></li>
                <li><a className="dropdown-item" href={link}>Vehicles</a></li>
                <li><a className="dropdown-item" href={link}>Health & Beauty</a></li>
                </ul>
            </div>
            </div>
            </div>
        </>
    );
}

export default Navbar;