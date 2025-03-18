import React from "react";
import { Link } from "react-router-dom";
import '../album/album.css';

function Album() {
    return (

        <div className="album-container-grid" >

            <div className="album" id="album" >
                <Link to="/" >
                    <img className="albumImg" src={`https://res.cloudinary.com/djtvlgplj/image/upload/v1742246230/large_Gary_O_Donnell_Album_Pic_1f58ebf46b.jpg`} alt="Gary O' Donnell Three Ways From Nowhere Album cover" />
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