import React from "react";
//import { Link } from "react-router-dom";
import './informationBar.css';

const InformationBar = ({ blogs = [] }) => {
    return (

        <div className="tickerContainer">
            <div className="tickerWrapper">
                <div className="tickerContent">
                    {Array.isArray(blogs) && blogs.length > 0 ? (
                        blogs.map((blog, index) => (
                            <span key={index} className="tickerItem">
                                {blog.name}{blog.shortDescription} &nbsp;&bull;&nbsp; {/* Adds a separator between articles */}
                                <span className="breakingNews">BREAKING NEWS...      BREAKING NEWS...      BREAKING NEWS...    BREAKING NEWS... </span>
                            </span>
                        ))
                    ) : (
                        <span className="breakingNews">BREAKING NEWS...      BREAKING NEWS...      BREAKING NEWS...    BREAKING NEWS... </span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default InformationBar;