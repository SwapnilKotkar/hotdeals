
import { NavLink } from "react-router-dom";


const DealsCard = (props) =>{
    // let link = "";
  
    return(
        <> 
        <div class="card mb-3 p-0">
            <div class="row g-0">
                <div class="col-md-4 d-flex justify-content-center align-items-center ">
                <img
                    src={props.dealImage}
                    style={{height:"70%", width:"70%"}}
                    alt="Trendy Pants and Shoes"
                    class="img-fluid rounded"
                />
                </div>
                <div class="col-md-8">
                    <div class="card shadow-none">
                        <div class="card-header card-title">{props.dealName}</div>
                        <div class="card-body">
                            <p class="card-text">{props.dealInfo}</p>
                        </div>
                        <div class="card-footer text-muted p-2">
                        <div className="container">
                                    <div className="row">
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