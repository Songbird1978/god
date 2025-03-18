import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/logo.js'


function NavOptions(handleDrawerClose) {

    return (
        <>

            <ul className="columnOneNav">

                <li >
                    <div onClick={() => {
                        // Call the function
                        window.location.replace("/#about");  // Perform the redirect
                    }} className="columnOneNav navOption" style={{ textDecoration: 'none', cursor: "pointer" }}  >ABOUT</div>
                </li>

                <li  >
                    <div onClick={() => {
                        // Call the function
                        window.location.replace("/#blogs");  // Perform the redirect
                    }} className="columnOneNav navOption" style={{ textDecoration: 'none', cursor: "pointer" }}  >BLOG</div>
                </li>
                <Logo onClick={() => {
                    handleDrawerClose();  // Call the function
                    window.location.replace("/#album");  // Perform the redirect
                }}
                    style={{ textDecoration: 'none', cursor: 'pointer' }} />
                <li  >
                    <div onClick={() => {
                        // Call the function
                        window.location.replace("/#listen");  // Perform the redirect
                    }} className="columnOneNav navOption" style={{ textDecoration: 'none', cursor: "pointer" }}  >LISTEN</div>
                </li>
                <li  >
                    <div className="columnOneNav navOption">
                        <Link to="https://www.ebay.co.uk/itm/335571305995" style={{ textDecoration: 'none', cursor: "pointer", color: "antiquewhite" }}>
                            STORE
                        </Link>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default NavOptions;