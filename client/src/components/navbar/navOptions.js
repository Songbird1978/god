import React from 'react';


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
                    <div className="columnOneNav" to="/discography" style={{ textDecoration: 'none', cursor: "pointer" }}  >BLOG</div>
                </li>

                <li  >
                    <div className="columnOneNav" to="#listen" style={{ textDecoration: 'none', cursor: "pointer" }} >LISTEN</div>
                </li>

                <li  >
                    <div className="columnOneNav" to="#listen" style={{ textDecoration: 'none', cursor: "pointer" }} >STORE</div>
                </li>

            </ul>

        </>
    )
}

export default NavOptions;