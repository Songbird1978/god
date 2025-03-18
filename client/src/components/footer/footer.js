import React from 'react';
import './footer.css';
//import NavOptions from '../navbar/navOptions';
import Contact from '../contact/contact';
import { Link } from 'react-router-dom';



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
                    Site by <Link to="" style={{ textDecoration: "none", color: "antiqueWhite" }}>Alker</Link>
                </p>
            </footer>
        </>
    )
}

export default Footer;