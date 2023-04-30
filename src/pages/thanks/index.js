import React from "react";
import thanks from "./index.module.css";
import { useRouter } from "next/router";

function ThankYou() {
  const { query } = useRouter();

  console.log(query);

  return (
    <>
      <div className={thanks.thankYou}>
        <h2>Thank you!</h2>
        <h3>We have received your request details:</h3>
        <ul>
          <li>
            User name: <strong>{query.name}</strong>
          </li>
          <li>
            User phone: <strong>{query.phone}</strong>
          </li>
          <li>
            User email: <strong>{query.email}</strong>
          </li>
          <li>
            Interested in these buyers: <strong>{query.postContent}</strong>
          </li>
        </ul>

        <button className={thanks.btn}>TAKE ME TO DASHBOARD</button>
      </div>
    </>
  );
}

export default ThankYou;
