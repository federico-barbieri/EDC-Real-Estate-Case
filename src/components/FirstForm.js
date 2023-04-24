import coolsies from "./FirstForm.module.css"
import { useState } from "react";


export default function FirstForm() {


  const [price, setPrice] = useState(null);
  const [zipCode, setZipCode] = useState(null);
  const [estate, setEstate] = useState(null);


  /* STORE PRICE */
  function storePrice(e){
    setPrice(e.target.value);
  }

    /* STORE ZIPCODE */

    function storeZip(e){
      setZipCode(e.target.value);
    }

      /* STORE TYPE OF ESTATE */
      function storeEstate(e){
        setEstate(e.target.value);
        console.log(estate);
      }


  return (
    <>
    <form className={coolsies.formality} action="/buyers" method="GET" >
      <h2>Form that WILL work</h2>
      <label className={coolsies.labelsy}>
              <span>Zip Code</span>
              <input onChange={storeZip} id="zippy" name="zipCode" required />
      </label>
      <label className={coolsies.labelsy2}>
              <span>Price</span>
              <input onChange={storePrice} id="pricy" name="price" required />
      </label>
      <label className={coolsies.labelsy3}>
              <span>Estate Type</span>
              <select onClick={storeEstate} id="estaty" name="estate">
                <option id="1">Villa</option>
                <option id="2">Villalejlighed</option>
                <option id="3">Rækkehus</option>
                <option id="4">Ejerlejlighed</option>
                <option id="5">Fritidshus</option>
                <option id="6">Fritidsgrund</option>
                <option id="7">Helårsgrund</option>
                <option id="8">Andelsbolig</option>
                <option id="9">Landejendom</option>

              </select>
      </label>
      <button   className={coolsies.button}>Submit</button>

    </form>
    </>
  )
}
