import React from "react";
import thanks from "./index.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import success from "@/assets/house-heart-thin.svg";

function ThankYou() {
  const { query } = useRouter();

  // I am trying to store the selected cards in a global state (sunday 30april)

  return (
    <>
    <div className={thanks.bigDiv}>
      <form className={thanks.thankYou} action="/dashboard" method="GET">
        <Image
          className={thanks.success}
          src={success.src}
          width={80}
          height={80}
          alt="Thank You"
          priority
        />
        <h2>Thank you!</h2>
        <p>We have received your information.</p>

        <button className={thanks.btn}>TAKE ME TO DASHBOARD</button>
      </form>
      </div>
    </>
  );
}

export default ThankYou;
