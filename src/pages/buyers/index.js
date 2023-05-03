import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./Buyers.module.css";
import { useState, useEffect, useRef } from "react";
import BuyerCard from "@/components/BuyerCard";
import supabase from "@/utils/supabaseClient";
import { useContext } from "react";
import { SellerContext, UpdateContext } from "../../../context/sellerContext";

export default function Buyers() {
  {
    /*------------------ GRAB INFO YOU FILLED IN PREVIOUS FORM ------------------*/
  }
  const { query } = useRouter();
  const router = useRouter();

  {
    /*------------------ USE STATE TO STORE POTENTIAL FAKE BUYERS ------------------*/
  }
  const [potentialBuyers, setPotentialBuyers] = useState([]);

  /*------------------ ALL OF THIS IS OUR FORM IN THIS PAGE ------------------*/

  const [name, setName] = useState(null);
  const [mail, setMail] = useState(null);
  const [phone, setPhone] = useState(null);

  /* STORE NAME */
  function storeName(e) {
    setName(e.target.value);
  }

  /* STORE MAIL */
  function storeMail(e) {
    setMail(e.target.value);
  }

  /* STORE PHONE */
  function storePhone(e) {
    setPhone(e.target.value);
  }

  {
    /*------------------ USE EFFECT TO FETCH POTENTIAL FAKE BUYERS ------------------*/
  }

  useEffect(() => {
    const api = `api/find-buyers?zipCode=${query.zipCode}&price=${query.price}&estateType=${query.estateType}&size=${query.size}`;

    console.log(query.estateType);

    let fetchRes = fetch(api);
    fetchRes
      .then((res) => res.json())
      .then((buyers) => {
        setPotentialBuyers(buyers);
      })
      .catch((err) => {
        console.log(err);
      });

    // if any of the elements in the following array change, useEffect will be activated again
  }, [query.zipCode, query.estateType, query.price, query.size]);

  {
    /*------------------ USESTATE TO STORE CARDS WE SPECIFICALLY SELECT FROM THE BATCH ------------------*/
  }

  const [buyerSelected, setBuyerSelected] = useState([]);

  {
    /*------------------ GLOBAL VARIABLE THAT WILL STORE THE SELECTED BATCH TO BE USED SOMEWHERE ELSE ------------------*/
  }

  const selectedBuyers = useContext(SellerContext);
  const setSelectedBuyers = useContext(UpdateContext);

  {
    /*------------------ WHEN WE SELECT A CARD, WE STORE ITS ID IN STATE ------------------*/
  }

  function youClickedMe({ id, title, myBtnRef }) {
    // disable the btn when you click it
    myBtnRef.current.disabled = true;

    setBuyerSelected([id, ...buyerSelected]);
    //    [
    //      {key: id, name: title, btnRef: myBtnRef},
    //      ...buyerSelected,
    //    ]
    //  );

    {
      /*------------------ WITHIN THIS FUNCTION, WE ALSO SAVE THE ID GLOBALLY  ------------------*/
    }

    setSelectedBuyers([id, ...buyerSelected]);

    //  setSelectedBuyers({id, });

    // set BuyerSelected to the new chosen item + whatever was there before

    // WHATS BELOW WORKED PERFECTTTLYYY

    //  setBuyerSelected(
    //    [
    //      {key: id, name: title, btnRef: myBtnRef},
    //      ...buyerSelected,
    //    ]
    //  );
  }

  {
    /*------------------ DELETE A SELECTION FROM THE UL (NOT WORKING) ------------------*/
  }

  function deleteLi(buyer) {

    // store clicked buyer's id
    let personally = buyer;

    
  
    // remove id from new state
    setBuyerSelected(buyerSelected.filter((el) => el !== personally));
  }

  {
    /*------------------ SUPABASE MAGIC ------------------*/
  }

  const submitted = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from("houses").insert({
      name: name,
      email: mail,
      phone: phone,
      interest: selectedBuyers,
    });
    if (error) throw error;
    router.push("/thanks");
  };

  {
    /*------------------ RETURN A CARD FOR EACH ELEMENT IN THE DATA WE GOT IN THE FETCHING ------------------*/
  }

  const users = potentialBuyers.map((data, key) => {
    return (
      <BuyerCard
        key={key}
        id={data.id}
        title={`Potential Buyer N ${key}`}
        description={data.description}
        adults={data.adults}
        child={data.children}
        maxPrice={`${data.maxPrice} DKK`}
        minSize={`${data.minSize}  m²`}
        takeOver={data.takeoverDate}
        youClickedMe={youClickedMe}
      />
    );
  });

  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <div className={styles.wrapper}>
        <h1 className={styles.headline}>Select potential buyers</h1>

        <div className={styles.importantWrapper}>
          {/*------------------ HERE ARE THE CARDS OF THE POTENTIAL BUYERS (LEFT) ------------------*/}

          <div className={styles.keepingArticles}>
            {users}
            {potentialBuyers.length === 0 ? <p>Try again</p> : null}
          </div>

          {/*------------------ FORM (RIGHT) ------------------*/}

          <div className={styles.storedCards}>
            <form
              className={styles.finalSelectionForm}
              /* action="/thanks" */
              onSubmit={submitted}
            >
              <ul className={styles.uly}>
                <h3>Your selection will appear here</h3>

                {buyerSelected.map((buyer) => (
                  <li
                    className={styles.lily}
                    onClick={() => deleteLi(buyer)}
                    key={buyer}
                  >
                    Buyer ID {buyer}
                  </li>
                ))}
              </ul>

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
                <input
                  onChange={storePhone}
                  id="phoney"
                  name="phone"
                  required
                />
              </label>
              <div className="terms">
                <label className={styles.checkbox}>
                  <input type="checkbox" name="terms" required />
                  <span>
                    Yes, please, EDC may contact me with offers and information
                    related to the real estate market.
                  </span>
                </label>
              </div>

              <button className={styles.btnImproved}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
