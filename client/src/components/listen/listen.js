import React from 'react';
//import { Link } from 'react-router-dom';



function Listen() {

    return (
        <div className="listenEmbedContainer" id="listen" style={{ padding: "80px", backgroundColor: "black" }}>
            <div style={{ width: "100%", color: "antiqueWhite", fontSize: "50px", fontFamily: "BigShoulder", }}>Listen</div>
            <iframe style={{ borderRadius: "12px", backgroundcolor: "peru" }}
                src="https://open.spotify.com/embed/artist/1XJ41uLGgFygsjP44hknkt?utm_source=generator&theme=0"
                title="listenSpotify"
                width="100%"
                height="500px"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy">
            </iframe>
        </div>

    )
}

export default Listen;