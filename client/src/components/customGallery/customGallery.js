import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './customGallery.css';

const CustomGallery = ({ images }) => {

    console.log("Images from Home:", images);


    return (
        <div className="galleryContainer" id="gallery">
            {images.length > 0 ? (
                <ImageGallery

                    height="80vh"
                    width="auto"
                    items={images}
                    showThumbnails={true}
                    showFullscreenButton={true}
                    autoPlay={false}
                    additionalClass="custom-gallery"
                    style={{ padding: "20px" }}
                />
            ) : (
                <p>Loading images...</p>
            )}
        </div>
    );
};

export default CustomGallery;