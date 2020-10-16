import React from 'react';
import Card from './Card';
import Useful_Website,{Virus_Check} from './Sdata';

const Main_Card = (props) => {
    return (
        <>
       
       <div className="card">
    <div className="card-header" id="headingOne" data-toggle="collapse" data-target="#One" aria-expanded="true" aria-controls="collapseOne">
      <h5 className="mb-0 text-success">        
          Useful Sites       
      </h5>
    </div>

    <div id="One" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
    		<div className="outer-div">
      	
           
                
       {Useful_Website.map((val,index) => {
           return (
            <Card
            key={index} 
            imgsrc={val.simg}
            link={val.link}
            title={val.title}
            />
           );
       })}	

        </div>
    </div>
  </div>

  <div className="card">
    <div className="card-header" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <h5 className="mb-0">
          Virus Check Sites
      </h5>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
    		<div className="outer-div">    			      	
           
                
        {Virus_Check.map((val,index) => {
           return (
            <Card
            key={index} 
            imgsrc={val.simg}
            link={val.link}
            title={val.title}
            />
           );
       })}	

        </div>
    </div>
  </div>
            
    </>        
    );
}

export default Main_Card;