import React from "react";


function Details(props){

  function handleClick(){
       props.onReturn();
  }

    return(
      <>
      <button type="submit" className="btn btn-primary" onClick={handleClick} style={{width: "9rem"}}>Return</button>
       <br></br>
       <br></br>
        <div className="card bg-light mb-3" style={{width: "18rem"}}>
        
        <div className="card-body">
        
         <h6 className="card-title">{props.id}</h6>
          <h5 className="card-title">{props.heading}</h5>
          
          <p className="card-text">{props.content}</p>
          
        </div>
      </div></>

    );
}

export default Details;