import React from "react";
import "./blogs.css";

// Record Component (Reusable)
const Record = ({ imageUrl }) => {
    const grooveCount = 20;
    const initialSize = 350;
    const scale = 0.96;

    console.log("imageUrl:", imageUrl);

    return (
        <div className="record" id="record" style={{ width: `${initialSize}px`, height: `${initialSize}px`, position: 'relative' }}>
            {/* Center Hole with Blog image*/}
            <div className="centerHole"
                style={{
                    position: "absolute",
                    backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
                    backgroundSize: "cover",   // Ensures full coverage
                    backgroundPosition: "center", // Centers the image
                    backgroundRepeat: "no-repeat",
                }}
            >
            </div>

            {/* Grooves */}
            {Array.from({ length: grooveCount }).map((_, i) => {
                const size = initialSize * Math.pow(scale, i + 1);

                return (
                    <div
                        key={i}
                        style={{
                            position: "absolute",
                            width: `${size}px`,
                            height: `${size}px`,
                            borderRadius: "50%",
                            border: "1px solid gray",
                        }}
                    />
                );
            })}
        </div>
    );
};



// Blogs Component
const Blogs = ({ blogs = [] }) => {

    return (
        <div className="blogs" >
            <h1 className="title" id="blogs" style={{ width: "100%" }}>Blogs</h1>
            <div className="blogContainer">
                {/* Render Record Component */}

                {/* Render Blogs */}
                {blogs.length > 0 ? (
                    blogs.map((blog, index) => {
                        console.log("Full Blog Entry:", blog)
                        const imageUrl = blog.images?.length > 0
                            ? `http://localhost:1337${blog.images[0].formats?.thumbnail?.url || blog.images[0].url}`
                            : ""; //Fallback if no image

                        console.log("Blog ID:", blog.id);
                        console.log("Blog description:", blog.shortDescription);
                        console.log("Extracted Image URL:", imageUrl); // Debugging
                        return (
                            <div key={index} className="blogItem">
                                {/* Render Record with Blog's image */}
                                <Record imageUrl={imageUrl}>
                                    <figure className="front"></figure>
                                </Record>

                            </div>
                        );
                    })
                ) : (
                    <p>No blogs available.</p>
                )}
            </div>
        </div>

    );
};

export default Blogs;
