import React from 'react';
import { Link } from 'react-router-dom';


function NavOptions() {

    return (
        <>

            <ul className="columnOneNav">

                <li >
                    <div onClick={() => {
                        // Call the function
                        window.location.replace("/#about");  // Perform the redirect
                    }} className="columnOneNav" style={{ textDecoration: 'none', cursor: "pointer" }}  >ABOUT</div>
                </li>

                <li  >
                    <div onClick={() => {
                        // Call the function
                        window.location.replace("/#blogs");  // Perform the redirect
                    }} className="columnOneNav" style={{ textDecoration: 'none', cursor: "pointer" }}  >BLOG</div>
                </li>

                <li  >
                    <div onClick={() => {
                        // Call the function
                        window.location.replace("/#listen");  // Perform the redirect
                    }} className="columnOneNav" style={{ textDecoration: 'none', cursor: "pointer" }}  >LISTEN</div>
                </li>
                <li  >
                    <div className="columnOneNav">
                        <Link to="https://www.ebay.co.uk/itm/335571305995" style={{ textDecoration: 'none', cursor: "pointer", color: '#403434' }}>
                            STORE
                        </Link>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default NavOptions;