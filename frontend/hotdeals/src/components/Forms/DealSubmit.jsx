import Navbar from "../Navbar";
import Footer from "../Footer";
import { useState } from "react/cjs/react.development";
import { useForm } from "react-hook-form";
import DealsData from "../DealsData";
import {useNavigate} from 'react-router-dom';


const DealSubmit = () =>{
    const history = useNavigate();


    const[deal, setDeal]= useState({
        dealLink:"",
        dealTitle:"",
        dealPrice:"",
        dealCategory:"",
        dealImage:""
    });

    const[dealRecord, setDealRecord] = useState([]);

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setDeal({...deal, [name]: value});
    }

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async () =>{
        setDealRecord([...dealRecord, deal]);
        setDeal({
            dealLink:"",
            dealTitle:"",
            dealPrice:"",
            dealCategory:"",
            dealImage:""
        });

        const Arr = DealsData.concat(dealRecord);
        console.log([Arr]);

        const {dealLink, dealTitle, dealPrice, dealCategory, dealImage} = deal;

        const res = await fetch('/submitdeal', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({ dealLink, dealTitle, dealPrice, dealCategory, dealImage })
        });

        const data = res.json();

        if(res.status === 422 || !data) {
            window.alert("deal not submitted");
        }else{
            window.alert("deal submitted");
            history("/submitdeal");
        }
    }


    return(
        <>
            <Navbar/>
            <div className="container d-flex flex-column justify-content-center p-4" >
                <div className="container d-flex justify-content-center mb-4">
                <span className="fs-3 fw-bolder" style={{fontWeight:"400", color:"black"}}>Submit your deal</span>
                </div>
                <div className="container d-flex justify-content-center">
                <form method="POST" className="rounded-5 p-lg-5 p-4 shadow-2-soft" onSubmit={handleSubmit(onSubmit)} noValidate style={{color:"black", fontWeight:"500", backgroundColor:"white"}}>
                 <div className="form-group">
                    <label>Deal link</label>
                    <input type="url" className="form-control rounded-5" name="dealLink" ref={register({ required: "link is required" })} value={deal.dealLink} onChange={handleChange} />
                    <p className="warning">{errors.dealLink?.message}</p>
                </div>
                <div className="form-group">
                    <label>Deal title</label>
                    <input type="text" className="form-control rounded-5" name="dealTitle" ref={register({ required: "product name is required" })} value={deal.dealTitle} onChange={handleChange}  />
                    <p className="warning">{errors.dealTitle?.message}</p>
                </div>
                <div className="form-group">
                    <label>Deal price</label>
                    <input type="number" className="form-control rounded-5" name="dealPrice" ref={register({ required: "product price is required" })} value={deal.dealPrice} onChange={handleChange}  />
                    <p className="warning">{errors.dealPrice?.message}</p>
                </div>
                <div className="form-group">
                    <label>Deal Category</label>
                    <select className="form-select rounded-5" name="dealCategory" ref={register({ required: "product category is required" })} onChange={handleChange}>
                            <option value="">All</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Home & Living">Home & Living</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Groceries">Groceries</option>
                            <option value="Travel">Travel</option>
                            <option value="Sports & Outdoors">Sports & Outdoors</option>
                            <option value="Gaming">Gaming</option>
                            <option value="Vehicles">Vehicles</option>
                            <option value="Healthy & Beauty">Healthy & Beauty</option>
                        </select>
                        <p className="warning">{errors.dealCategory?.message}</p>
                </div>
                <div className="form-group">
                    <label>Deal image</label>
                    <input type="file" className="form-control rounded-5" name="dealImage" ref={register({ required: "product image is required" })} value={deal.dealImage} onChange={handleChange}  />
                    <p className="warning">{errors.dealImage?.message}</p>
                </div>
                <div className="form-group">
                    <button type="submit" className="container btn btn-primary btn-lg" ><span className="text-capitalize" style={{fontSize:"14px", fontWeight:"500"}}>Submit deal</span></button>
                </div>
               
                </form>                
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default DealSubmit;