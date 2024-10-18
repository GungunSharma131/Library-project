import React from "react"

function Card(props){
    return(
        <>
        
        <div className="card-section ">
     <div className="card main-card " >
      <img src={props.image} height={200} width={20} className="card-img-top" alt="..." />
     <div className="card-body">
    <h5 className="card-title"> {props.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className="button-86" role="button"><a href="https://en.wikipedia.org/wiki/Library">More Info</a></button>
  </div>
</div>
</div>
</>
    )
}

export default Card 