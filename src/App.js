import React from 'react';
import Learning_17062025 from './components/Learning_17062025.js';
import Learning_22062025 from './components/Learning_22062025.js';
import Learning_23062025 from './components/Learning_23062025.js';
import Car from './components/car.js';
import Learning_26062025 from './components/Learning_26062025.js';
// import Header_check from './Header';
import Learning_27062025 from './components/Learning_27062025.js';
import CarNameChange from './CarNameChange.js';
import Learning_28062025 from './components/Learning_28062025.js';
import Learning_29062025 from './components/Learning_29062025';
import Learning_30062025 from './components/Learning_30062025.js';
import Header from './components/Header.js';
function App() {
  return (
    <div className="App">
      <Header />
      <Learning_30062025 />
      <Learning_29062025 />
      <Learning_28062025 brand="Ford" />
      <Learning_27062025 />
      <CarNameChange />
      {/* <Header_check favcol="Yellow"/>
       */}
       <Learning_26062025/>
      <h2>Welcome to My React App</h2>
      <Learning_17062025 />
      <hr />
      <Learning_22062025 />
      <hr />
      <Learning_23062025 />
      <hr />
      <Car />
    </div>
  );
}
export default App;