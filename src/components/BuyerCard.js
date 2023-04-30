import coolCard from "./BuyerCard.module.css";
import { useState, useEffect, useRef } from "react";

export default function BuyerCard({
  youClickedMe,
  id,
  title,
  description,
  adults,
  child,
  minSize,
  maxPrice,
  takeOver,
}) {
  const myBtnRef = useRef(null);

  return (
    <form id={id} className={coolCard.article}>
      <h2>{title}</h2>
      <h4>
        <span className={coolCard.info}>Description: </span>
        {description}
      </h4>
      <p>Num of Adults: {adults}</p>
      <p>Num of children: {child}</p>
      <p>Max price is: {maxPrice}</p>
      <p>Min size is: {minSize}</p>
      <p>Takeover date: {takeOver}</p>

      <button
        ref={myBtnRef}
        className={coolCard.inputImproved}
        onClick={() => youClickedMe({ id, title, myBtnRef })}
        type="button"
        name="checkMe"
      >
        SELECT BUYER
      </button>
    </form>
  );
}
