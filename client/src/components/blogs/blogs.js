import React from "react";
import "./blogs.css";
import BlogModal from '../blogs/blogModal.js';
import { useState } from 'react';
import '../../index.css';
import SEO from '../SEO.js';

// Record Component (Reusable)
const Record = ({ imageUrl }) => {
    const groovecount = 20;
    const initialSize = 350;
    const scale = 0.96;


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
            {Array.from({ length: groovecount }).map((_, i) => {
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

    const [selectedBlog, setselectedBlog] = useState(null);

    const openModal = (blog) => {
        setselectedBlog(blog);
    };

    const handleModalClose = () => {
        setselectedBlog(null);
    };


    return (
        <>
            <SEO 
                title="Blog"
                description="Latest news and updates from Gary O'D and The DSH"
                url="/"
                />
            <div className="blogs" id="blogs" >
                <div className="title" style={{ width: "100%" }}>Blogs</div>
                <div className="blogContainer">
                    {/* Render Blogs */}
                    {blogs.length > 0 ? (
                        blogs.map((blog, index) => {
                            const imageUrl = blog.images?.length > 0
                                ? `${blog.images[0].formats?.thumbnail?.url || blog.images[0].url}`
                                : ""; //Fallback if no image

                            return (
                                <>   
                                <SEO 
                                    title={blog.Name}
                                    description={blog.shortDescription}
                                    type="article"
                                    image={imageUrl}
                                    url={`/blog/${blog}`}
                                    />

                                <div key={index} className="blogItem flip-card-container" >
                                    <div className="flip-card">
                                        {/* Front side - Record - Render Record with Blog's image and grooves*/}
                                        <div className="flip-card-front">
                                            <Record imageUrl={imageUrl} />
                                        </div>
                                        {/* Back side - blog Info */}
                                        <div groovecount="0" className="flip-card-back">
                                            <h2 className="flip-card-back-title blogTitle">{blog.Name}</h2>
                                            <p>{blog.shortDescription}</p>
                                            <button onClick={() => openModal(blog)} className="read-more">Read More</button>
                                        </div>
                                    </div>
                                </div>

                                </>

                            );
                        })
                    ) : (
                        <p>No blogs available.</p>
                    )}

                </div>

                {/* Modal Overlay */}
                {selectedBlog && (
                    <div className="modalOverlay" onClick={handleModalClose}>
                        <BlogModal blog={selectedBlog} handleModalClose={handleModalClose} />
                    </div>
                )}
            </div >
        </>
    );
};

export default Blogs;
