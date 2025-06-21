import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/logo.js';



function NavOptions(handleDrawerClose) {

    return (
        <>

            <ul className="columnOneNav">

                <li >
                    <div onClick={() => {
                        // Call the function
                        window.location.replace("/#about");  // Perform the redirect
                    }} className="columnOneNav navOption" style={{ textDecoration: 'none', cursor: "pointer" }}>ABOUT</div>
                </li>

                <li  >
                    <div onClick={() => {
                        // Call the function
                        window.location.replace("/#blogs");  // Perform the redirect
                    }} className="columnOneNav navOption" style={{ textDecoration: 'none', cursor: "pointer" }}  >BLOG</div>
                </li>
                <li  >
                    <div onClick={() => {
                        // Call the function
                        window.location.replace("/#listen");  // Perform the redirect
                    }} className="columnOneNav navOption" style={{ textDecoration: 'none', cursor: "pointer" }}  >LISTEN</div>
                </li>
                <Logo onClick={() => {
                    handleDrawerClose();  // Call the function
                    window.location.replace("/#album");  // Perform the redirect
                }}
                    style={{ textDecoration: 'none', cursor: 'pointer' }} />

                <li  >
                    <div onClick={() => {
                        // Call the function
                        window.location.replace("/#tour");  // Perform the redirect
                    }} className="columnOneNav navOption" style={{ textDecoration: 'none', cursor: "pointer" }}  >TOUR</div>
                </li>
                <li  >
                    <div className="columnOneNav navOption">
                        <Link
                            to="https://garyodonnellthedimestoreheroes.bandcamp.com/album/three-ways-from-nowhere"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none', cursor: "pointer", color: "antiquewhite" }}>
                            STORE
                        </Link>
                    </div>
                </li>
                <li  >
                    <div onClick={() => {
                        // Call the function
                        window.location.replace("/#contact");  // Perform the redirect
                    }} className="columnOneNav navOption" style={{ textDecoration: 'none', cursor: "pointer" }}  >CONTACT</div>
                </li>
            </ul>
        </>
    )
}

export default NavOptions;