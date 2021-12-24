import DealsCard from "./DealsCard";
import DealsData from "./DealsData";

const Deals = () =>{
    return(
        <>            
            <div className="container-sm p-4">
                <div className="row row-cols-1 row-cols-md-3 g-4"> 
                    {DealsData.map((val, index) => {
                        return (
                                    <DealsCard key={index} dealName={val.name} dealImage={val.image} dealPrice={val.price} dealInfo={val.info} dealLink ={val.link} />
                                )
                    })}
                </div>
            </div>            
        </>
    );
}

export default Deals;