// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Navbar';
import Deals from './Deals';
import DealsPage from "./DealsPage";
import Footer from "./Footer";

const HomePage = () =>{
    return(
        <>
        <Navbar/>
        <DealsPage/>
        <Footer/>
    </>
    );
}

export default HomePage;