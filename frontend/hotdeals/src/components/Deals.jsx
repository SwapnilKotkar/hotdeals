import DealsCard from "./DealsCard";
import DealsData from "./DealsData";

const Deals = () =>{
    return(
        <>
            <section className="py-2 deals_list">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-3 justify-content-start"> 
                        {DealsData.map((val, index) => {
                            return (
                                <DealsCard key={index} dealName={val.name} dealImage={val.image} dealPrice={val.price} dealLink ={val.link} />
                            )
                        })}
                     </div>
                </div>
            </section>
        </>
    );
}

export default Deals;