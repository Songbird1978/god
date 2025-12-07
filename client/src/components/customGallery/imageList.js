import React from "react";
import './customGallery.css';

const ImageList = ({ images }) => {
    return (
        <div className="imageList">
            {images.length > 0 ? (
                images.map((img, index) => (
                    <div key={index} className="imageItem">
                        <img src={img.thumbnail} alt={img.shortDescription} height="50" />
                    </div>
                ))
            ) : (
                <p>No images available.</p>
            )}
        </div>
    );
};

export default ImageList;
