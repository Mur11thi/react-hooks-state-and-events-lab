import React ,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
 const [mode , setMode]=useState ("light")
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = mode === "App light"? "App dark" : "App light"
  function darkModeHandler(){
      setMode( appClass)
  }
  // function buttonHandler(){
  //   setMode (mode === "App light"? "Dark Mode" : "Light Mode" )
  // }

  return (
    <div className={`App ${mode}`}>
      <header>
        <h2>Shopster</h2>
        <button onClick={darkModeHandler}>{mode === "App light"? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
