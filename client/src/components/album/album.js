import React from "react";
//import { Link } from "react-router-dom";
import '../album/album.css';
import '../../index.css';

function Album() {
    return (

        <div className="album-container-grid" >

            <div className="album" id="album" >

            </div>

            <div className='buttonsArea'>
                <div className="albumListdiv, actionTitle" id="albumStatement">
                    NEW ALBUM AVAILABLE NOW</div >
                <a href="https://www.ebay.co.uk/itm/335571305995" className="albumListdiv">
                    <div className="button">BUY </div>
                </a>
                <div className="albumListdiv">
                    <div onClick={() => window.location.replace("/#listen")} className="button" style={{ scrollBehaviour: "smooth" }}>LISTEN</div>
                </div>
            </div>
        </div>


    );
}

export default Album;