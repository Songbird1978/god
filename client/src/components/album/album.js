import React from "react";
//import { Link } from "react-router-dom";
import '../album/album.css';
import '../../index.css';

function Album(hero) {
    return (

        <div className="album-container-grid" >

            <div className="album" id="album" >

            </div>

            <div className='buttonsArea'>
                <div className="albumListdiv, actionTitle" id="albumStatement">
                    NEW ALBUM AVAILABLE NOW</div >
                <a href="https://garyodonnellthedimestoreheroes.bandcamp.com/album/three-ways-from-nowhere" target="_blank"
                    rel="noopener noreferrer" className="albumListdiv">
                    <div className="button">BUY </div>
                </a>
                <div className="albumListdiv">
                    <div onClick={() => window.location.replace("/#listen")}
                        className="button" style={{ scrollBehaviour: "smooth" }}>LISTEN</div>
                </div>
            </div>
        </div>


    );
}

export default Album;