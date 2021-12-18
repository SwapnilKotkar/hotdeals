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
            <div className="container-fluid col-md-4 mt-4 mb-4 rounded-3 shadow d-flex justify-content-center deal_submit_form">
                <form method="POST" className="m-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form_title mb-4 text-center"><h1>Submit a deal</h1></div>
                    <div className="form-row row justify-content-center">
                        <div className="form-group col-10 mb-3">
                            <label htmlFor="dealLink">Product Link</label>
                            <input type="url" className="form-control" name="dealLink" ref={register({ required: "link is required" })} value={deal.dealLink} onChange={handleChange} />
                            <p className="warning">{errors.dealLink?.message}</p>
                        </div>
                        <div className="form-group col-10 mb-3">
                            <label htmlFor="dealTitle">Product Title</label>
                            <input type="text" className="form-control" name="dealTitle" ref={register({ required: "product name is required" })} value={deal.dealTitle} onChange={handleChange}  />
                            <p className="warning">{errors.dealTitle?.message}</p>
                        </div>
                        <div className="form-group col-10 mb-3">
                            <label htmlFor="dealPrice">Product Price</label>
                            <input type="number" className="form-control" name="dealPrice" ref={register({ required: "product price is required" })} value={deal.dealPrice} onChange={handleChange}  />
                            <p className="warning">{errors.dealPrice?.message}</p>
                        </div>
                        <div className="form-group col-10 mb-3">
                        <label htmlFor="dealCategory">Product Category</label>
                        <select className="form-select" name="dealCategory" ref={register({ required: "product category is required" })} onChange={handleChange}>
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
                        <div className="form-group col-10 mb-3">
                            <label htmlFor="dealImage">Product Image</label>
                            <input type="file" className="form-control" name="dealImage" ref={register({ required: "product image is required" })} value={deal.dealImage} onChange={handleChange}  />
                            <p className="warning">{errors.dealImage?.message}</p>
                        </div>                        
                        <div className="form-group col-10 mb-4">
                        <button type="submit" className="container btn btn-primary">Submit Deal</button>
                        </div>
                    </div>
                </form> 
            </div>
            <Footer/>
        </>
    );
}

export default DealSubmit;