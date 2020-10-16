import React from 'react';

const Card = (props) => {
    return (
        <div className="card main-card">          
		  <a href={props.link} target="_blank">
      <img className="card-img-top" src={props.imgsrc} alt={props.imgsrc} />
      </a>
      <div>
          <p>{props.title}</p>
          </div>
		</div>
    );
}

export default Card;