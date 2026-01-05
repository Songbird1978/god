import React from "react";
//import { Link } from "react-router-dom";
import "../album/album.css";
import "../../index.css";

function Album() {
    return (
        <div className="album-container-grid" fetchpriority="high">
            <div className="album" id="album"></div>

            <div className="buttonsArea">
                <div className="albumListdiv, actionTitle" id="albumStatement">
                    NEW ALBUM AVAILABLE NOW
                </div>
                <a
                    href="https://garyodonnellthedimestoreheroes.bandcamp.com/album/three-ways-from-nowhere"
                    target="_blank"
                    aria-label="open bandcamp"
                    rel="noopener noreferrer"
                    className="albumListdiv"
                >
                    <div
                        className="button"
                        aria-label="open bandcamp to buy the album"
                    >
                        BUY THE ALBUM{" "}
                    </div>
                </a>
                <div className="albumListdiv" style={{ paddingBottom: "40px" }}>
                    <div
                        aria-label="open bandcamp to buy the album"
                        onClick={() => window.location.replace("/#listen")}
                        className="button"
                        style={{ scrollBehaviour: "smooth" }}
                    >
                        LISTEN
                    </div>
                </div>
            </div>

            <div
                className="listenLive"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "#4A5375",
                    padding: "40px",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <img
                    src="https://res.cloudinary.com/djtvlgplj/image/upload/v1765044989/gary_at_the_wedge_dad7c2de6e.jpg"
                    alt="Gary at the Wedgewood Rooms"
                    loading="lazy"
                    style={{ width: "70%" }}
                />
                <div
                    style={{
                        display: "block",
                        justifyContent: "center",
                        padding: "20px",
                    }}
                >
                    <div
                        className="albumListdiv, actionTitle"
                        id="showsStatement"
                        style={{}}
                    >
                        LIVE SHOWS COMING SOON...
                    </div>
                    <div>
                        <a
                            href="https://www.wedgewood-rooms.co.uk/events/2026-03-05-gary-odonnell-and-the-dime-store-heroes-the-wedgewood-rooms"
                            aria-label="open wedgewood rooms to buy tickets"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="albumListdiv"
                        >
                            <div className="button">TICKETS</div>
                        </a>
                        <div className="albumListdiv">
                            <div
                                onClick={() =>
                                    window.location.replace("/#tour")
                                }
                                aria-label="go to the tour section"
                                className="button"
                                style={{ scrollBehaviour: "smooth" }}
                            >
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
