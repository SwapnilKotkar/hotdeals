
const DealsCard = (props) =>{
    // let link = "";
    return(
        <>
            <div className="col col-12 mb-4 deal_details">
                  <div className="card h-100">
                      <img className="card-img-top" src={props.dealImage} alt="..." />
                      <div className="card-body p-4">
                          <div className="text-center">
                              <h5 className="fw-bolder">{props.dealName}</h5>
                              {props.dealPrice}
                          </div>
                      </div>
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href={props.dealLink}>Get Deal</a></div>
                      </div>
                  </div>
              </div>
                {/* <div className="card mb-3" style={{maxWidth: "540px"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={link} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                    </div>
                </div> */}
        </>
    );
}

export default DealsCard;