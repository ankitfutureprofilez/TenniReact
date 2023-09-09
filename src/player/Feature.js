import React from "react";

 function Feature( ){
    return(
        <>
          <li>
             <div className="card-img">
                 <img src="{court-img}" alt="img" />
                 <h2>{props.title}</h2>
             </div>
          </li>
        </>
    );
 }
 export default Feature;