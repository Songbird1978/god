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
                        <div className="albumListdiv" style={{ paddingBottom: '40px'}}>
                            <div onClick={() => window.location.replace("/#listen")}
                                className="button" style={{ scrollBehaviour: "smooth" }}>LISTEN</div>
                        </div>
                        
                    </div>
                    <div style={{display: 'flex', flexDirection: "column", width: '100vw', height: '100vh', backgroundColor: '#4A5375', padding: "40px", alignItems: 'center', justifyContent: 'center'}}>
                    <img src="https://res.cloudinary.com/djtvlgplj/image/upload/v1765044989/gary_at_the_wedge_dad7c2de6e.jpg" alt="Gary at the Wedgewood Rooms" style={{width: '20rem', height: '20rem'}}/>
                    <div style={{ display: "block", justifyContent: "center", padding: '20px'}}>
                        <div className="albumListdiv, actionTitle" id="showsStatement" style={{}}>
                        LIVE SHOWS COMING SOON...
                        </div >
                        <div>
                        <a href="https://garyodonnellthedimestoreheroes.bandcamp.com/album/three-ways-from-nowhere" target="_blank"
                        rel="noopener noreferrer" className="albumListdiv">
                            <div className="button">
                            TICKETS 
                            </div>
                        </a>
                        <div className="albumListdiv">
                            <div onClick={() => window.location.replace("/#tour")}
                            className="button" style={{ scrollBehaviour: "smooth" }}>
                            DATES
                            </div>
                    </div>
                </div>
                </div>
            </div>
        </div>


    );
}

export default Album;