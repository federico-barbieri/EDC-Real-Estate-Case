import React from "react";
import dashboard from "./dashboard.module.css";
import { useState } from "react";
import supabase from "@/utils/supabaseClient";

function Dashboard() {
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [mail, setMail] = useState(null);
  const [interest, setInterest] = useState(null);
  const [allData, setallData] = useState([]);

  const getDataBack = async () => {
    let { data: houses, error } = await supabase.from("houses").select("*");

    // try{
    //   let {data: houses, error} = await supabase
    //   .from("houses")
    //   .select("name");

    if (error) throw error;
    console.log("data:", houses);

    setallData(houses);

    //  } catch (error) {
    //    console.log("error:", error)
    //  }
  };

  return (
    <>
      <div>
        <div className={dashboard.initialForm}>
          <h2>MAIN DASHBOARD</h2>

          <button onClick={getDataBack} className={dashboard.btn}>
            SHOW DATA
          </button>
        </div>
        <div className={dashboard.mainForm}>
          <table className={dashboard.table}>
            <thead>
              <tr className={dashboard.titleRow}>
                <th>ID</th>
                <th>created @</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Interested in:</th>
              </tr>
            </thead>
            <tbody>
              {allData.map((person) => (
                <tr key={person.id} className={dashboard.userRow}>
                  <td className={dashboard.tableRow}>{person.id}</td>
                  <td className={dashboard.tableRow}>{person.created_at}</td>
                  <td className={dashboard.tableRow}>{person.name}</td>
                  <td className={dashboard.tableRow}>{person.email}</td>
                  <td className={dashboard.tableRow}>{person.phone}</td>
                  <td className={dashboard.tableRow}>{person.interest}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
