// import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { userContext } from './App';

const Navbar = () =>{
    const link = "#";
    const userStatus = useSelector((state) => state.userReducer);
    const adminStatus = useSelector((state) => state.adminReducer);


    // const {state,  dispatch} = useContext(userContext);

    const Menu = () => {
      if(userStatus === "user") {
        return(
          <>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">User</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><NavLink className="dropdown-item" to='/userprofile'>Profile</NavLink></li>
                <li><NavLink className="dropdown-item" to='/'>Logout</NavLink></li>
              </ul>
            </li>
          </>
        );
      }
      else if(adminStatus === "admin") {
        return(
          <>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">Admin</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><NavLink className="dropdown-item" to='/adminprofile'>Profile</NavLink></li>
                <li><NavLink className="dropdown-item" to='/'>Logout</NavLink></li>
              </ul>
            </li>
          </>
        );
      }
      else{
       return(
        <>
        <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/adminlogin">Admin Login</NavLink>
        </li> 
        <li className="nav-item">
            <NavLink className="nav-link" to="/userlogin">Sign in</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/signup">Sign up</NavLink>
        </li>
    </>
       );
      }
    }
    
    return(
        <>            
          <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-none" style={{fontSize:"15px"}}>
            <div className="container-lg">
            <NavLink className="navbar-brand" to="/">hotDeals</NavLink>
              <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <Menu/>
                <li>
                  <NavLink className="nav-link p-0 mx-lg-2" to="/submitdeal"><button className="btn btn-primary rounded-3" type="submit" ><span className="text-capitalize" style={{fontSize:"14px"}}>Submit Deal</span></button></NavLink>                
              </li>
                </ul>          
              </div>
            </div>
          </nav>

          <div className="  bg-light d-flex justify-content-center">
            <div className="container-lg p-0 m-2 row d-flex justify-content-center">  
              <div className="dropdown col-lg-1 col-md-2 col-sm-2 col-3 d-flex justify-content-center">
                            <button className="btn btn-outline-primary p-2 m-0 rounded-3 border-1"  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="text-capitalize" style={{fontSize:"13px"}}>Category</span>
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
                        <div className="col-lg-6 col-9 p-0 ">
                <form className="d-flex">
                  <input className="form-control me-2 rounded-3" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-primary rounded-3" type="submit"><span className="text-capitalize" style={{fontSize:"14px"}}>Search</span></button>
                </form>
              </div>
            </div>
          </div>
          
        </>
    );
}

export default Navbar;