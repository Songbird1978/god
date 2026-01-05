import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./customGallery.css";

const CustomGallery = ({ images }) => {
    //console.log("Images from Home:", images);

    return (
        <div className="galleryContainer" id="gallery">
            {images.length > 0 ? (
                <ImageGallery
                    height="80vh"
                    width="auto"
                    items={images}
                    alt={images.alt}
                    showThumbnails={true}
                    showFullscreenButton={true}
                    autoPlay={false}
                    additionalClass="custom-gallery"
                    style={{ padding: "10%" }}
                />
            ) : (
                <p style={{ padding: "20%" }}>Loading images...</p>
            )}
        </div>
    );
};

export default CustomGallery;
