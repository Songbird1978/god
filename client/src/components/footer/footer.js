import React from 'react';
import './footer.css';
//import NavOptions from '../navbar/navOptions';
import Contact from '../contact/contact';
import { Link } from 'react-router-dom';
import { HeartStraight } from "@phosphor-icons/react";

function Footer() {

    return (
        <>
            <footer className="footerContainer" id="contact">

                <div className="columnOne">
                    <Link to="./message" style={{ textDecoration: "none", color: "grey", ariaLabel:"link to send message" }}>
                        <div className="button">CONTACT</div>
                    </Link>
                </div>
                <div className="columnOne">
                    <Link to="./mailingList" style={{ textDecoration: "none", color: "grey", ariaLabel:"link to join mailing list" }}>
                        <div className="button">MAILING LIST</div>
                    </Link>
                </div>
                <div className="columnOneContact">
                    <Contact className="columnOneContact" />
                </div>
                <p> © 2024 Gary O'Donnell. <br></br>All rights reserved.<br></br>
                    Site made with <span><HeartStraight size={15} weight="bold" color="red" /></span> by
                    <a href="https://www.thesongbird.co.uk"
                        style={{
                            textDecoration: "none",
                            color: "peru"
                        }}
                        target="_blank"
                        ariaLabel="External link to the Songbird's website - the developer who created this site"
                        rel="noopener noreferrer"
                    > The Songbird
                    </a>
                </p>

            </footer>
        </>
    )
}

export default Footer;