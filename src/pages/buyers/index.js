import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./Buyers.module.css";
import { useState, useEffect, useRef } from "react";
import BuyerCard from "@/components/BuyerCard";


export default function Buyers() {


   // use router to grab the stuff you filled up in the first form
   const { query } = useRouter();

   const myUlRef = useRef(null);


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

     }, [query.zipCode, query.estate, query.price] )

     const users = potentialBuyers.map((data, key) => {
      return (

        <BuyerCard
          key={key}
          id={key}
          title={`Potential Buyer N ${key}`}
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

     // function that activates when you click on a card btn

  function youClickedMe({id, title}){

    // set BuyeSelected to the new item + whatever was before

    setBuyerSelected(
      [
        {key: id, name: title},
        ...buyerSelected, 
      ]
    );
     }

         // function that deletes a li, removes everything from the UL
         // and rerenders 


     function deleteLi(name){
      // remove card from state
       let helloIAmNewState = buyerSelected.filter(el => el.name !== name); 

      // set new state
      setBuyerSelected(helloIAmNewState)

      // remove everything from the UL
     // myUlRef.innerHTML = "";
    
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
        <ul ref={myUlRef}>

          {buyerSelected.map((buyer) => (
            
          <li className={styles.lily} onClick={() => deleteLi(buyer.name)} key={buyer.key}>{buyer.name}</li> 
            
          ) 
          )}
        </ul>
        </div>
      </div>
      

      </div>
    
    </>
  
  );
}

