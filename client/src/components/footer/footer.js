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
                <div className="columnOneContact">
                    <Contact className="columnOneContact" />
                </div>
                <div className="columnOne">
                    <Link to="./message" style={{ textDecoration: "none", color: "grey" }}>
                        <div className="button">CONTACT</div>
                    </Link>
                </div>
                <div className="columnOne">
                    <Link to="./mailingList" style={{ textDecoration: "none", color: "grey" }}>
                        <div className="button">MAILING LIST</div>
                    </Link>
                </div>
                <p> © 2024 Gary O'Donnell. <br></br>All rights reserved.<br></br>
                    Site made with <span><HeartStraight size={15} weight="bold" color="red" /></span> by
                    <a href="https://www.thesongbird.co.uk"
                        style={{
                            textDecoration: "none",
                            color: "antiqueWhite"
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                    > The Songbird
                    </a>
                </p>
            </footer>
        </>
    )
}

export default Footer;