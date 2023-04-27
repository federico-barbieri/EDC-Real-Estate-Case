import Head from "next/head";
import styles from "./Home.module.css";
import {useRouter} from "next/router";
import FirstForm from "@/components/FirstForm";


export default function Home() { 


  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <div className="wrapper">

        <FirstForm />
        
        <div className={styles.content}>
         
          <form action="/buyers" method="GET" className={styles.form}>
            <label>
              <span className={styles.label}>Zip Code</span>
              <input name="zipCode" required />
            </label>
            <button  className={styles.button}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
