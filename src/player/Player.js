import React from "react";
// import { Link } from "react-router-dom";
import Feature from "./Feature"

  function Player() {
     return(
        <>
            <div className="player-top">
                    <div className="container"> 
                        <div className="player-app-dec">
                            <h2>Your Perks as a Tennis Khelo Player: </h2>
                            <h1>More Fun, Less Hassle</h1>
                            <p>At Tennis Khelo, players are in for a treat! From hassle-free match scheduling to exclusive rewards, we've got your back. Dive into the game and experience tennis like never before.</p>
                        </div>
                    </div>            
            </div>
            <div className="app-feature-player">
                <div className="spreater"></div>
                    <div className="container">  
                            <h2>App Features for players</h2> 
                            <p>Explore the Tennis Khelo App's Exciting Features That Transform Your Game</p>
                           
                            <ul>
                               <Feature/>
                            </ul>
                             
                    </div>            
            </div>


        </>

     );

} 
export default Player;