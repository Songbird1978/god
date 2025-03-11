import React from 'react';
import '../biography/biography.css';
import CustomGallery from '../../components/customGallery/customGallery.js'; // Adjust the import path based on your project structure

import InformationBar from '../../components/informationBar/informationBar.js';
//import ImageList from '../../components/customGallery/imageList.js';

function Biography({ blogs = [], formattedGallery = [] }) {
    // process images safely

    console.log("formattedGallery from home:", formattedGallery);
    return (

        <>
            <div className="liveGallery">
                <CustomGallery images={formattedGallery} title="Live Gallery" />
            </div>
            <div className="about" id="about">
                <h1 className="heading">About</h1>
                <div className="biographyPaper">
                    <p className="biographyParagraph">
                        Born in Portsmouth on Christmas Day, by candle light, placed in a drawer, and delivered by Dr Mary Joseph – Gary O’Donnell, arrived in this world many years ago.<br></br><br></br>
                        He’s spent the majority of it, living within the city boundaries and has been a prominent character in and around the local music community.
                        He has spent a number of years with Who’s Who, a prominent national tribute to Messrs, Townshend, Daltrey & co – even ending up headlining an evening of Mod-iliciousness at the Hammersmith Apollo – an experience few musicians get to appreciate.
                        <br></br><br></br> His knowledge of music is far reaching, “Until you place me in front of a digital jukebox that is…”, He says with a smile.<br></br><br></br> Gary's new release "Three Ways From Nowhere" by Gary O'Donnell & The Dime Store Heroes is a fantastic debut album.

                        A labour of love by Gary (Who's Who, County Line) and his songwriting partner Gary Shaw (Sherman Robertson, Eric Bibb, Mike Vernon).<br></br><br></br>


                        With influences taken from their songwriting heroes, Paul Thorn, Gretchen Peters, Bernie Taupin, Tom Waits & Lowell George - this is a must buy for purveyors of Old, New, Music.  The first single taken from it, My Home Town. reached No.1 for 3 weeks in the local music charts and is still riding high.
                        <br></br><br></br>

                        <b> Track Listing</b>


                        <br></br><br></br>
                        1. God's Own Country
                        <br></br><br></br>
                        2. Brazilian Barbeque
                        <br></br><br></br>
                        3. Five Minutes
                        <br></br><br></br>
                        4. Three Ways From Nowhere
                        <br></br><br></br>
                        5. I Wish
                        <br></br><br></br>
                        6. My Hometown
                        <br></br><br></br>
                        7. Moonlight Shines On Arran
                        <br></br><br></br>
                        8. Sea Of Love*
                        <br></br><br></br>
                        9. All Men Are Bastards*
                        <br></br><br></br>

                        The album is Gary's first original solo outing after many years fronting Who's Who the popular tribute to one of the best rock bands in the world and features 9 songs presented in a unique blend of  Rock, Alt- Country, and Americana style storytelling songwriting.
                        <br></br><br></br>

                        PLEASE NOTE:  This album has a PARENTAL ADVISORY Notice attached to it because two of the tracks* have sweary type words in them.
                    </p>
                </div>
            </div>

            <InformationBar blogs={blogs} />
        </>
    );

}

export default Biography;