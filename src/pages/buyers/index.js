import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./Buyers.module.css";
import { useState, useEffect } from "react";
import BuyerCard from "@/components/BuyerCard";


export default function Buyers() {


   // use router to grab the stuff you filled up in the first form
   const { query } = useRouter();


   // use state to store potential buyers as objects
     const [potentialBuyers, setPotentialBuyers] = useState([]);

     useEffect(() => {

     // api based on information coming from the router
   const api = `api/find-buyers?zipCode=${query.zipCode}&price=${query.price}&estateType=${query.estate}`;
     


      // API for get requests
      let fetchRes = fetch(api);
       // fetchRes is the promise to resolve it by using.then() method
      fetchRes.then(res => res.json())
      .then(buyers => {
      setPotentialBuyers(buyers);
        //storePotentialBuyer(buyers);
        })
        .catch(err=>{
          console.log(err);
        })

     }, [] )

     const users = potentialBuyers.map((data, id) => {
      return (

        <BuyerCard
          key={id}
          title={`Potential Buyer N ${id}`}
          description={data.description}
          adults={data.adults}
          child={data.children}
          maxPrice={data.maxPrice}
          minSize={data.minSize}
          takeOver={data.takeoverDate}
          youClickedMe={youClickedMe}
        />
      )
     })   
     
     // store cards selected
     
     const [buyerSelected, setBuyerSelected] = useState([])

  function youClickedMe({title}){

    setBuyerSelected(
      [
        ...buyerSelected,
        title,
      ]
    );
    
     }
     

  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <div className="wrapper">
        <h1 className={styles.headline}>Trying to fetch something</h1>

      <div className={styles.importantWrapper}>
      {/* HERE ARE THE CARDS OF THE POTENTIAL BUYERS */}

        <div className={styles.keepingArticles}>
          {users}
        </div>

      {/* HERE IS WHERE MY STORED CARDS SHOULD SHOW UP */}

      <div className={styles.storedCards}>
      {buyerSelected}

        </div>
      </div>
        
      
      
    {/*    <div className={styles.content}>
          <h2>Query params:</h2>
          <pre>
            <code>{JSON.stringify(query, null, 2)}</code>
          </pre>
        </div>

      */}

      </div>
    
    </>
  
  );
}

