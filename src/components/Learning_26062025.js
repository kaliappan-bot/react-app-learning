import React,{ useState } from "react";
// import "./Learning_26062025.css";
import './Header.css';
function Learning_26062025() {
  const [selectedColor, setSelectedColor] = useState("red");
  const changeColor = () => {
    if ((selectedColor === "red")) setSelectedColor("yellow");
    else if ((selectedColor === "yellow")) setSelectedColor("Green");
    else setSelectedColor("red");
  };
  const changeCar= ()=>{
    console.log("Car Change function called")
  }
  return (
    <div>
      <div className="Header-Container"></div>
      <h1>My Favourite Color is {selectedColor}</h1>
      <button type="button" onClick={changeColor}>
        Change color
      </button>
      <button type="button" onClick={changeCar}>
        Change Car
      </button>
    </div>
  );
}
export default Learning_26062025;
