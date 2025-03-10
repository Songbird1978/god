import React from "react";
import { Link } from "react-router-dom";
import '../album/album.css';

function Album() {
    return (

        <div className="album-container-grid" >

            <div className="album" id="album">
                <Link to="/" >
                    <img className="albumImg" src={`https://res.cloudinary.com/djtvlgplj/image/upload/v1741313307/Screenshot_2025_01_08_at_19_29_13_4ee072f099_69e0a28006.png`} alt="Gary O' Donnell Three Ways From Nowhere Album cover" width="400px" />
                </Link>
            </div>

            <div className='buttonsArea'>
                <div className="albumListdiv, actionTitle" id="albumStatement">
                    NEW ALBUM<br></br>
                    AVAILABLE NOW
                </div >
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