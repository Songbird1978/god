import React from 'react';
import { Link } from 'react-router-dom';
import { SpotifyLogo } from "@phosphor-icons/react";
import { FacebookLogo } from "@phosphor-icons/react";
import { EnvelopeSimple } from "@phosphor-icons/react";
import { YoutubeLogo } from "@phosphor-icons/react";
import { LinktreeLogo } from "@phosphor-icons/react";
import { Parallelogram } from "@phosphor-icons/react";
import { InstagramLogo } from '@phosphor-icons/react';
import '../footer/footer.css';


function Contact() {

    return (

        <div className="columnOneContact">
            <ul className="columnOneContact">
                <li className="contactListItem">
                    <a href="https://www.facebook.com/WhosWhoUK/?locale=en_GB">
                        <FacebookLogo className="icon" weight="bold" />
                    </a>
                </li>
                <li className="contactListItem">
                    <a href="https://www.instagram.com/gary_odanddsh?igsh=a2ZxZ3BveHpkZDk=">
                        <InstagramLogo className="icon" weight="bold" />
                    </a>
                </li>
                <li className="contactListItem">
                    <a href="https://open.spotify.com/artist/6Xwck1365WQ4H1amZ9797E?si=A11WX6_0Rs-inYHwh3-HtQ">
                        <SpotifyLogo className="icon" weight="bold" />
                    </a>
                </li>
                <li className="contactListItem">
                    <a href="https://youtu.be/xnxFQ609t8Q?si=VMXlJEXYg8Z7lVVe">
                        <YoutubeLogo className="icon" weight="bold" />
                    </a>
                </li>
                <li className="contactListItem">
                    <a href="https://garyodonnellthedimestoreheroes.bandcamp.com/">
                        <Parallelogram className="icon" weight="bold" />
                    </a>
                </li>

                <li className="contactListItem">
                    <a href="https://linktr.ee/Gary_O_Donnell">
                        <LinktreeLogo className="icon" weight="bold" />
                    </a>
                </li>
                <li className="contactListItem">
                    <Link to="/Message">
                        <EnvelopeSimple className="icon" weight="bold" />
                    </Link>
                </li>
            </ul>

        </div >
    )
}

export default Contact;