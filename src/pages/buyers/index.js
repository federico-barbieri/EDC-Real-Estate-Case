import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./Buyers.module.css";
import { useState, useEffect, useRef } from "react";
import BuyerCard from "@/components/BuyerCard";


export default function Buyers() {


   // use router to grab the stuff you filled up in the first form
   const { query } = useRouter();

   // have a reference for the UL

   const myUlRef = useRef(null);

   // have a reference for the TRY AGAIN BTN

   const tryAgainBtnRef = useRef(null);


   // use state to store card buyers as objects
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

        // this basically pays attention to these specific key words (queries)

     }, [query.zipCode, query.estate, query.price, tryAgainBtnRef.current?.textContent] )

     // for every potential buyer, create a Buyer Card, thanks

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
     
     // store the cards the user selected
     
     const [buyerSelected, setBuyerSelected] = useState([])

     

     

     // when you click on one of the card btns..
     // it receives the id of the buyer, the title(description) and the 
     // reference to the button so it can be disabled

    function youClickedMe({id, title, myBtnRef}){


    // disable the btn when you click it
    myBtnRef.current.disabled = true;

    // set BuyerSelected to the new chosen item + whatever was there before

    setBuyerSelected(
      [
        {key: id, name: title, btnRef: myBtnRef},
        ...buyerSelected, 
      ]
    );
     }

    
     // you can delete a LI from the UL and the UL will rerender
     // the function takes a name(description) and will
     // filter through the state to see if there is an element with 
     // that description. If it does, it removes it

     function deleteLi(name){

      // remove card from state
       let helloIAmNewState = buyerSelected.filter(el => el.name !== name); 

      // set new state
      setBuyerSelected(helloIAmNewState)

      // remove everything from the UL
     // myUlRef.innerHTML = "";
    
     }

     // NOW COMES THE MIGHTY FORM

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

  function fetchingBtnWasClicked(ref){
    ref.current.textContent = "Trying my best to re-fetchhhh"

  }

  // grab form 

  const almightyForm = useRef(null);
      
     
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
          {potentialBuyers.length === 0 ? <p>No buyers for you</p> : null}
        </div>

      {/* HERE IS WHERE MY FORM IS */}

      <div className={styles.storedCards}>
        <form ref={almightyForm} className={styles.finalSelectionForm} action="/thanks" method="GET" >
        <ul className={styles.uly} ref={myUlRef}>

          <h2>Your selection will appear here</h2>
          
          {buyerSelected.map((buyer) => (
          <li className={styles.lily} onClick={() => deleteLi(buyer.name)} key={buyer.key}>{buyer.name}</li> 
          ) 
          )}
        </ul>

        <textarea className={styles.importantTextArea}
          
          name="postContent"
          defaultValue={buyerSelected.map((buyer) => buyer.key)}
          rows={4}
          cols={40}
          />
       
      <label className={styles.label}>
              <span>NAME</span>
              <input onChange={storeName} id="namy" name="name" required />
      </label>
      <label className={styles.label}>
              <span>EMAIL</span>
              <input onChange={storeMail} id="emaily" name="email" required />
      </label>
      <label className={styles.label}>
              <span>PHONE</span>
              <input onChange={storePhone} id="phoney" name="phone" required />
      </label>
      
      <button    className={styles.btnImproved}>Submit</button>

    </form>
        
          
      
        </div>
      </div>
      

      </div>
    
    </>
  
  );
}

