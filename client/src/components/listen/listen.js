import React from 'react';
//import { Link } from 'react-router-dom';



function Listen() {

    return (
        <div className="listenEmbedContainer" id="listen" style={{ paddingTop: "80px", paddingLeft: "20px", paddingRight: "20px", backgroundColor: "black", justifyContent: "center" }}>
            <div style={{ width: "100%", color: "antiqueWhite", fontSize: "50px", fontFamily: "BigShoulder", }}>Listen</div>
            <div style={{ display: "flex", justifyContent: "left", width: "100%", padding: "20px" }}>
                <iframe style={{ border: "0", height: "50px" }}
                    src="https://bandcamp.com/band_follow_button_classic/4179928856"
                    title="followOnBandCamp">
                </iframe>
            </div>
            <iframe style={{ borderRadius: "12px", backgroundcolor: "peru" }}
                src="https://open.spotify.com/embed/artist/1XJ41uLGgFygsjP44hknkt?utm_source=generator&theme=0"
                sandbox="allow-scripts allow-same-origin"
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