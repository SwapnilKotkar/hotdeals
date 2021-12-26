import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { userContext } from './App';


const Navbar = () =>{
    const link = "#";

    const {state,  dispatch} = useContext(userContext);

    const Menu = () => {
      if(state) {
        return(
          <>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">User/Admin</a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><NavLink className="dropdown-item" to='/userprofile'>Profile</NavLink></li>
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
            <NavLink className="nav-link" to="/signup">Sign in</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link p-0" to="/userlogin"><button className="btn btn-outline-primary rounded-3" >Sign up</button></NavLink>
        </li>
    </>
       );
      }
    }
    
    return(
        <>            
          <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-none" style={{fontSize:"15px"}}>
            <div class="container-lg">
            <NavLink className="navbar-brand" to="/">Navbar</NavLink>
              <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <Menu/>
                <li>
                  <NavLink className="nav-link p-0" to="/submitdeal"><button className="btn btn-primary rounded-3" type="submit" ><span className="text-capitalize" style={{fontSize:"14px"}}>Submit Deal</span></button></NavLink>                
              </li>
                </ul>          
              </div>
            </div>
          </nav>

          <div class="  bg-light d-flex justify-content-center">
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
                        <div class="col-lg-6 col-9 p-0 ">
                <form class="d-flex">
                  <input class="form-control me-2 rounded-3" type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn btn-primary rounded-3" type="submit"><span className="text-capitalize" style={{fontSize:"14px"}}>Search</span></button>
                </form>
              </div>
            </div>
          </div>
        </>
    );
}

export default Navbar;