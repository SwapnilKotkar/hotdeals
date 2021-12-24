
const DealsCard = (props) =>{
    // let link = "";
    return(
        <>           
            <div className="col">                
                <div className="card h-100">
                    <img
                        src={props.dealImage}
                        className="card-img-top"
                        alt="Palm Springs Road"
                    />
                    <div className="card-body">
                        <h5 className="card-title">{props.dealName}</h5>
                        <p className="card-text" style={{fontSize:"14px"}}>
                        {props.dealInfo}
                        </p>
                    </div>
                    <div className="container mb-3">
                        <div className="row">
                            <div className="col-6 d-flex justify-content-start align-items-center fw-bolder fs-5" style={{color:"#4E9F3D"}}>{props.dealPrice}</div>
                            <div className="col-6 d-flex justify-content-end align-items-center">
                                <a href={props.dealLink}>
                                    <span className="text-capitalize fs-6" style={{fontWeight: "500"}}>Get Deal</span> <hr className="m-0 p-0 h-80"/>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DealsCard;