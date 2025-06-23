import { useState } from "react";
import React from 'react';
import Car from './car'
import './Learning_22062025.css';
function Learning_22062025() {
    const [message, setMessage] = useState("React Class Components");
  return (
    
    <div className="Learning_22062025">
    <h1>22/06/2025 Learning</h1>
    <h4>{message}</h4>
    <button onClick={() => setMessage("Updated Message!")}>Change Message</button>
    <Car/>
</div>
  );
}
 
export default Learning_22062025;
