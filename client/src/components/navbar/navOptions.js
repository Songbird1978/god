import React from 'react';
import Link from 'react';


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
                    <Link to="https://www.ebay.co.uk/itm/335571305995?_skw=gary+o+donnell+three+ways&itmmeta=01JNHSFWK62979022Q6T7BX86B&hash=item4e219bc60b:g:AGYAAOSwZgBm3Bi4&itmprp=enc%3AAQAKAAAA0FkggFvd1GGDu0w3yXCmi1d4%2F7uN5Qku0U1yYHFJls01IunjbzsDuDBgTw7PlSKQeHiqpeuQAVq9efRy7LZw4xm1ueXAH8hhtQrC1t7SdpnLLdMjVSER5TQfSmrw4Dc%2BJGWizKWBuxoANzWGJ1ErHq8i04arCro9E%2Br9wR3fcij9o8BCKyyU9xhnfhWyWChoTDKsEY4OXK57XB%2BPXaGLWy%2BAMqrIgwrbAdVYdOpz11YqqaG73JV2uldQX72gjYwH9L%2BZpIAamAaLc83rzMNqGXY%3D%7Ctkp%3ABk9SR-DJv7msZQ" className="columnOneNav">
                        <div className="columnOneNav" to="#store" style={{ textDecoration: 'none', cursor: "pointer" }} >STORE</div>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default NavOptions;