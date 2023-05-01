import React from 'react';
import thanks from "./index.module.css"
import { useRouter } from "next/router";



function ThankYou() {

  const {query} = useRouter();

   // I am trying to store the selected cards in a global state (sunday 30april)







  return (
    <>
    <form className={thanks.thankYou} action="/dashboard" method='GET'>
   
    <h2>Thank you!</h2>
    <p>We have received your information.</p>


    <button className={thanks.btn}>TAKE ME TO DASHBOARD</button>
    </form>
    
    </>
  )
}

export default ThankYou