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

        <FirstForm className={styles.form} />
        
        
      </div>
    </>
  );
}
