
import { NavLink } from "react-router-dom";
import { getKey } from "./DealDetails";


const DealsCard = (props) =>{
    // let link = "";  
    return(
        <> 
        <div className="card mb-3 p-0">
            <div className="row g-0">
                <div className="col-md-4 d-flex justify-content-center align-items-center ">
                <img
                    src={props.dealImage}
                    style={{height:"70%", width:"70%"}}
                    alt="Trendy Pants and Shoes"
                    className="img-fluid rounded"
                />
                </div>
                <div className="col-md-8">
                    <div className="card shadow-none">
                        <div className="card-header card-title">{props.dealName}</div>
                        <div className="card-body">
                            <p className="card-text">{props.dealInfo}</p>
                        </div>
                        <div className="card-footer text-muted p-2">
                            <div className="container">
                                <div className="row m-1">
                                    <div className="col-6 d-flex justify-content-start align-items-center fw-bolder fs-5" style={{color:"#4E9F3D"}}>{props.dealPrice}</div>
                                    <div className="col-6 d-flex justify-content-end align-items-center">
                                        <NavLink to="/dealdetails">
                                        <button className="btn btn-outline-primary border-1">
                                            <span className="text-capitalize fs-6" style={{fontWeight: "500"}}>Get Deal</span> 
                                        </button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default DealsCard;