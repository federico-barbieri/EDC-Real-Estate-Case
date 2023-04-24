import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./Buyers.module.css";
import BuyerCard from "@/components/BuyerCard";


export default function Buyers() {
  const { query, zipCode, price, estate } = useRouter();

  const api = `api/find-buyers?zipCode=${zipCode}&price=${price}&estate=${estate}`;

  console.log(zipCode, price, estate);
  // API for get requests
  //let fetchRes = fetch(api);
    // fetchRes is the promise to resolve
    // it by using.then() method
    //fetchRes.then(res =>
      //  res.json()).then(d => {
      //      console.log(d.zipCode)
      //  })


  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <div className="wrapper">
        <h1 className={styles.headline}>Trying to fetch something</h1>


      <BuyerCard />

        <p>
          On this page you get the <code>`query`</code> params like{" "}
          <code>`zipCode`</code>, and can use them to fetch a list of buyers
          from the API.
        </p>
        <p>
          Make sure to read the docs on how to fetch data on a page - There are
          multiple ways of doing it, and you should choose the one that fits
          your solution best.
        </p>
        <ul>
          <li>
            <a
              href="https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props"
              target="_blank"
            >
              next.js - Data fetching
            </a>
          </li>
          <li>
            <a
              href="https://react.dev/learn/synchronizing-with-effects#fetching-data"
              target="_blank"
            >
              react.dev - Fetching data
            </a>
          </li>
        </ul>
        <div className={styles.content}>
          <h2>Query params:</h2>
          <pre>
            <code>{JSON.stringify(query, null, 2)}</code>
          </pre>
        </div>
      </div>
    </>
  );
}
