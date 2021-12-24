import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () =>{
    const link = "#";
    
    return(
        <>
            {/* <nav className="navbar navbar-expand-lg navbar-light shadow-none" style={{backgroundColor: "#FFFFFF "}}>
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
                    <li className="nav-item">
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
                    </li>  
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href='' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            User/Admin
                        </a>
                        <ul className="dropdown-menu p-0" aria-labelledby="navbarDropdown">
                            <li><NavLink className="dropdown-item" to='/userprofile'>Profile</NavLink></li>
                            <li><NavLink className="dropdown-item" to='/'>Logout</NavLink></li>
                        </ul>
                    </li>
                    <li>
                    <NavLink className="nav-link p-1" to="/submitdeal"><button className="btn btn-primary shadow-sm" type="submit" >Submit Deal</button></NavLink>                
                    </li>      
                </ul>
                </div>
            </div>
            </nav>

            <div class="  bg-light d-flex justify-content-center">
<div className="container-sm p-0 m-2 row d-flex justify-content-center">  
  <div className="dropdown col-lg-1 col-3">
                <button className="btn btn-outline-primary p-2"  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <span className='uppercase'>Category</span>
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
            <div class="col-lg-6 col-9">
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-primary" type="submit">Search</button>
    </form>
  </div>
</div>
</div> */}
<nav class="navbar navbar-expand-lg navbar-light bg-light shadow-none" style={{fontSize:"15px"}}>
  <div class="container " >
  <NavLink className="navbar-brand" to="/">hotDeals</NavLink>
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/userlogin">User Login</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/adminlogin">Admin Login</NavLink>
        </li> 
        <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          User/Admin
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <li><NavLink className="dropdown-item" to='/userprofile'>Profile</NavLink></li>
        <li><NavLink className="dropdown-item" to='/'>Logout</NavLink></li>
        </ul>
      </li>
      <li>
        <NavLink className="nav-link p-0" to="/submitdeal"><button className="btn btn-primary rounded-3" type="submit" ><span className="text-capitalize" style={{fontSize:"14px"}}>Submit Deal</span></button></NavLink>                
    </li>
      </ul>
      
   
    </div>
  </div>
</nav>

<div class="  bg-light d-flex justify-content-center">
<div className="container-sm p-0 m-2 row d-flex justify-content-center">  
  <div className="dropdown col-lg-1 col-3 d-flex justify-content-center">
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
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-primary rounded-3" type="submit"><span className="text-capitalize" style={{fontSize:"14px"}}>Search</span></button>
    </form>
  </div>
</div>
</div>

        </>
    );
}

export default Navbar;