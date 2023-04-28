import React from 'react'
import selection from "./FinalSelection.module.css";
import { useState } from "react";


function FinalSelection({title}) {

   

    const [name, setName] = useState(null);
    const [mail, setMail] = useState(null);
    const [phone, setPhone] = useState(null);

    /* STORE NAME */
  function storeName(e){
    setName(e.target.value);
  }

  /* STORE MAIL */
  function storeMail(e){
     setMail(e.target.value);
    }

      /* STORE PHONE */
  function storePhone(e){
    setPhone(e.target.value);
  }

  return (
    <>
    <form className={selection.finalSelectionForm} action="/thanks" method="GET" >
      <h2>{title}</h2>
      <label className={selection.label}>
              <span>NAME</span>
              <input onChange={storeName} id="namy" name="name" required />
      </label>
      <label className={selection.label}>
              <span>EMAIL</span>
              <input onChange={storeMail} id="emaily" name="email" required />
      </label>
      <label className={selection.label}>
              <span>PHONE</span>
              <input onChange={storePhone} id="phoney" name="phone" required />
      </label>
      
      <button    className={selection.btnImproved}>Submit</button>

    </form>
    </>
  )
}

export default FinalSelection