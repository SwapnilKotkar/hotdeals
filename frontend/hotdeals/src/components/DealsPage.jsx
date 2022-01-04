import React, { useState } from 'react'
import DealsSearchBar from './DealsSearchBar';
import Deals from './Deals';
import DealsData from './DealsData';

const categories = ["all", ...new Set(DealsData.map((curElem) => curElem.category ))];

const DealsPage = () => {

    const [deals, setDeals] =useState(DealsData);

    const [catItems, setCatItems] = useState(categories);

    const filterItem = (itemCategory) =>{

      if(itemCategory === "all"){
        setDeals(DealsData);
        return;
      }

      const updatedCategory = DealsData.filter((curElem) => {
        return curElem.category === itemCategory;
      });
      setDeals(updatedCategory);
    }


    return (
        <>
            <DealsSearchBar filterItem = {filterItem} catItems={catItems}/>
            <Deals deals={deals} />
        </>
    )
}

export default DealsPage
