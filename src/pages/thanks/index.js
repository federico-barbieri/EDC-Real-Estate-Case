import React from 'react';
import thanks from "./index.module.css"
import { useRouter } from "next/router";

function ThankYou() {

  const {query} = useRouter();

  console.log({query})

  return (
    <>
    <div className={thanks.thankYou}>
    <h2>Thank you!</h2>
    <p>We have received your information:</p>
    <ul>
      <li>{query.name}</li>
      <li>{query.phone}</li>
      <li>{query.email}</li>
      <li>{query.key}</li>



    </ul>

    <button className={thanks.btn}>TAKE ME TO DASHBOARD</button>
    </div>
    </>
  )
}

export default ThankYou