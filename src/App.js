import React from 'react';
import Learning_17062025 from './components/Learning_17062025.js';
import Learning_22062025 from './components/Learning_22062025.js';
import Learning_23062025 from './components/Learning_23062025.js';
import Car from './components/car.js';
import Learning_26062025 from './components/Learning_26062025.js';
// import Header_check from './Header';
import CarNameChange from './CarNameChange.js';
function App() {
  return (
    <div className="App">
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