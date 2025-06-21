import React from 'react';
import '../biography/biography.css';
import CustomGallery from '../../components/customGallery/customGallery.js'; // Adjust the import path based on your project structure
import "../../index.css";
import InformationBar from '../../components/informationBar/informationBar.js';
//import ImageList from '../../components/customGallery/imageList.js';


function Biography({ blogs = [], formattedGallery = [], bio = [] }) {
    // process images safely

    console.log("formattedGallery from home:", formattedGallery);
    return (

        <>
            <div className="liveGallery">
                <CustomGallery images={formattedGallery} title="Live Gallery" />
            </div>
            <div className="about" id="about" >
                <div className="heading" >About</div>
                <div className="biographyContent">
                    <div className="biographyPaper">
                        <>
                            {bio.map((p, index) => (

                                <p key={`bio-${p.id}-${index}`} className="biographyParagraph">
                                    {p.text}
                                </p>
                            )
                            )}
                        </>



                    </div>
                </div>

            </div>

            <InformationBar blogs={blogs} />
        </>
    );

}

export default Biography;