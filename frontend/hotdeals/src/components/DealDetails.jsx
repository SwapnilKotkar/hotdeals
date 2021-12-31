import Navbar from './Navbar';
import Footer from "./Footer";
import DealsData from "./DealsData";

const DealDetails = () =>{
    return(
        <>
        <Navbar/>
        
        <div className='container-lg p-3'>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-12 d-flex justify-content-center align-items-center p-2 border-bottom border-grey border-2">
                        <img src={DealsData[0].image} className="img-fluid rounded-5" alt="..." style={{maxHeight:"70%", maxWidth:"70%"}}/>
                    </div>
                    <div className="col-12">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div className="container mb-3">
                        <div className="row">
                            <div className="col-6 d-flex justify-content-start align-items-center fw-bolder fs-5" style={{color:"#4E9F3D"}}>price</div>
                            <div className="col-6 d-flex justify-content-end align-items-center">
                                <a href="#">
                                    <span className="text-capitalize fs-6" style={{fontWeight: "500"}}>Get Deal</span> <hr className="m-0 p-0 h-80"/>
                                </a>

                            </div>
                        </div>
                    </div>
                        </div>
                       
                    </div>
                </div>
            </div>

            <div className="bg-white rounded shadow-sm p-4 mb-5 rating-review-select-page">
                    <h5 className="mb-4">Give product rating</h5>
                    <div className="form-group" id="rating-ability-wrapper">
	    <label className="control-label" for="rating">
	    <span className="field-label-header">How would you rate this deal ?</span><br/>
	    <span className="field-label-info"></span>
	    <input type="hidden" id="selected_rating" name="selected_rating" value="" required="required"/>
	    </label>
	    <h2 className="bold rating-header">
	    <span className="selected-rating">0</span><small> / 5</small>
	    </h2>
	    <button type="button" className="btnrating btn btn-default btn-lg shadow-none p-1" data-attr="1" id="rating-star-1">
	        <i className="fa fa-star" aria-hidden="true"></i>
	    </button>
	    <button type="button" className="btnrating btn btn-default btn-lg shadow-none p-1" data-attr="2" id="rating-star-2">
	        <i className="fa fa-star" aria-hidden="true"></i>
	    </button>
	    <button type="button" className="btnrating btn btn-default btn-lg shadow-none p-1" data-attr="3" id="rating-star-3">
	        <i className="fa fa-star" aria-hidden="true"></i>
	    </button>
	    <button type="button" className="btnrating btn btn-default btn-lg shadow-none p-1" data-attr="4" id="rating-star-4">
	        <i className="fa fa-star" aria-hidden="true"></i>
	    </button>
	    <button type="button" className="btnrating btn btn-default btn-lg shadow-none p-1" data-attr="5" id="rating-star-5">
	        <i className="fa fa-star" aria-hidden="true"></i>
	    </button>
	</div>
                    <form method='POST' className='m-2'>
                        <div className="form-group mb-2">
                            <label>Your Comment</label>
                            <textarea className="form-control"></textarea>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary btn-sm" type="submit"> Submit Comment </button>
                        </div>
                    </form>
                </div>
        </div>


        <Footer/>
    </>
    );
}

export default DealDetails;