import coolsies from "./FirstForm.module.css";
import { useState } from "react";
import { estateTypes } from "@/data/estateTypes";


export default function FirstForm() {
  const [price, setPrice] = useState(null);
  const [zipCode, setZipCode] = useState(null);
  const [estate, setEstate] = useState(null);
  const [size, setSize] = useState(null);


  /* STORE PRICE */
  function storePrice(e) {
    setPrice(e.target.value);
  }

  /* STORE SIZE */
  function storeSize(e) {
    setSize(e.target.value);
  }

  /* STORE ZIPCODE */
  function storeZip(e) {
    setZipCode(e.target.value);
  }

  /* STORE TYPE OF ESTATE */
  function storeEstate(e) {
    //  setEstate(e.target.value)
    setEstate(e.target.name);
    console.log(estate);
  }

  return (
    <>
      <form className={coolsies.formality} action="/buyers" method="GET">
        <h2>Form that WILL work</h2>
        <label className={coolsies.label}>
          <span>Zip Code</span>
          <input
            onChange={storeZip}
            id="zippy"
            name="zipCode"
            placeholder="Your area zip code"
            required
          />
        </label>

        <label className={coolsies.label}>
          <span>Size</span>
          <input
            onChange={storeSize}
            id="sizy"
            name="size"
            placeholder="The size of the property in sq"
            required
          />
        </label>

        <label className={coolsies.label}>
          <span>Price</span>
          <input
            onChange={storePrice}
            id="pricy"
            name="price"
            placeholder="Estate price in DKK"
            required
          />
        </label>

        <label className={coolsies.label}>
          <span>Estate Type</span>
          
          <select id="estaty" name="estateType">
            
            {estateTypes.map((el) => 
            <option value={el.id} key={el.id}>{el.name}</option>
            )}
           
          </select>
        </label>
        <button className={coolsies.button}>Find buyers</button>
      </form>
    </>
  );
}
