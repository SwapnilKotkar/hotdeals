import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () =>{

    const userStatus = useSelector((state) => state.userReducer);
    const adminStatus = useSelector((state) => state.adminReducer);


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
        </>
    );
}

export default Navbar;