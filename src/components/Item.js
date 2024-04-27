import React,{useState} from "react";

function Item({ name, category }) {

  const[inCart,setInCart]=useState(false)
  // const cartToggler = inCart === "Add to Cart" ? "Remove from Cart" :"Add to Cart"
  function cartToggler(){
    setInCart(!inCart)
  }
  return (
    <li className= {inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={cartToggler}>{inCart ?"Remove from Cart" :"Add to Cart" }</button>
    </li>
  );
}

export default Item;
