import React, {useState} from "react";
function CarNameChange() {
    const [carName, setCarName] = useState("Toyoto");

    const changeCar = () => {
        setCarName("Hyundai");
    };
    return (
        <div>
            <h1>My favourite car is {carName}</h1>
            <button onClick={changeCar}>Change Car</button>
        </div>
    );
}
export default CarNameChange;