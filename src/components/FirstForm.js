import coolsies from "./FirstForm.module.css";
import { useState } from "react";

export default function FirstForm() {
  const [price, setPrice] = useState(null);
  const [zipCode, setZipCode] = useState(null);
  const [estate, setEstate] = useState(null);

  /* STORE PRICE */
  function storePrice(e) {
    setPrice(e.target.value);
  }

  /* STORE ZIPCODE */
  function storeZip(e) {
    setZipCode(e.target.value);
  }

  /* STORE TYPE OF ESTATE */
  function storeEstate(e) {
    //  setEstate(e.target.value)
    setEstate(e.target.id);
    console.log(estate);
  }

  return (
    <>
      <form className={coolsies.formality} action="/buyers" method="GET">
        <h2>Form that WILL work</h2>
        <label className={coolsies.label}>
          <span>Zip Code</span>
          <input
            className="input"
            onChange={storeZip}
            id="zippy"
            name="zipCode"
            required
          />
        </label>
        <label className={coolsies.label}>
          <span>Price</span>
          <input
            className="input"
            onChange={storePrice}
            id="pricy"
            name="price"
            required
          />
        </label>
        <label className={coolsies.label}>
          <span>Estate Type</span>
          <select id="estaty" name="estate">
            <option onClick={storeEstate} id="1">
              Villa
            </option>
            <option onClick={storeEstate} id="2">
              Villalejlighed
            </option>
            <option onClick={storeEstate} id="3">
              Rækkehus
            </option>
            <option onClick={storeEstate} id="4">
              Ejerlejlighed
            </option>
            <option onClick={storeEstate} id="5">
              Fritidshus
            </option>
            <option onClick={storeEstate} id="6">
              Fritidsgrund
            </option>
            <option onClick={storeEstate} id="7">
              Helårsgrund
            </option>
            <option onClick={storeEstate} id="8">
              Andelsbolig
            </option>
            <option onClick={storeEstate} id="9">
              Landejendom
            </option>
          </select>
        </label>
        <button className={coolsies.button}>Find buyers</button>
      </form>
    </>
  );
}
