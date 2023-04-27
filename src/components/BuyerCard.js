import coolCard from "./BuyerCard.module.css"
import { useState, useEffect } from "react"


export default function BuyerCard({youClickedMe ,key, title, description, adults, child, minSize, maxPrice, takeOver }) {

  
  return (
    <form id={key} className={coolCard.article}>
        <h2>{title}</h2>
        <p>Description: {description}</p>
        <p>Num of Adults: {adults}</p>
        <p>Num of children: {child}</p>
        <p>Max price is: {maxPrice}</p>
        <p>Min size is: {minSize}</p>
        <p>Take over date is: {takeOver}</p>
        
              
              <button id={key} className={coolCard.inputImproved} onClick={() => youClickedMe({title})} type="button" name="checkMe">
                SELECT ME
                </button>
      
    </form>
  )
}




