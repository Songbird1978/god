import React from 'react';
import './footer.css';
//import NavOptions from '../navbar/navOptions';
import Contact from '../contact/contact';
import { Link } from 'react-router-dom';



function Footer() {

    return (
        <>

            <footer className="footerContainer" id="contact">

                <div className="columnOne">

                    <div className="columnOneContact">
                        <Contact className="columnOneContact" />
                    </div>
                </div>

                <div className="columnTwo">
                    <Link to="./message" style={{ textDecoration: "none", color: "grey" }}>
                        <div className="button">CONTACT</div>
                    </Link>
                </div>

                <div className="columnThree">
                    <Link to="./mailingList" style={{ textDecoration: "none", color: "grey" }}>
                        <div className="button">MAILING LIST</div>
                    </Link>
                </div>

                <div className="columnFour">
                    <p> © 2024 Gary O'Donnell. <br></br>All rights reserved.<br></br>
                        Site by <Link to="" style={{ textDecoration: "none", color: "grey" }}>Alker</Link>
                    </p>
                </div>

            </footer>

        </>
    )
}

export default Footer;