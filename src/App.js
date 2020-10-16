import React from 'react';
import Main_Card from './Main_Card';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';

const App = () => {
  return (
    <>
    <Navbar />

    <div className="container-fluid">
  

  <div className="container my-5">
    <div id="accordion">
    
      <Main_Card />
   
    </div>
  </div>
</div>
</>
  );
}

export default App;
