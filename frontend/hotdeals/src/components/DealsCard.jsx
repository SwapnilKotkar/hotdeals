
const DealsCard = (props) =>{
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
        </>
    );
}

export default DealsCard;