import React from "react";
import "./blogs.css";
import CloseIcon from '@mui/icons-material/Close';




// Blogs Component
const BlogModal = ({ blog, index, handleModalClose }) => {


    return (
        <div key={index} className="modalContainer">
            <div className="blogModal">
                <div className="closeIconBox">
                    <CloseIcon className="closeIcon" onClick={handleModalClose} style={{ color: "antiquewhite" }} />
                </div>
                <div className="picBox">
                    <img className="pic" style={{ width: "auto", height: "auto" }} src={(`${blog.images[0].formats?.thumbnail?.url}`)} alt={blog.Name}></img>
                </div>
                <div className="blogTitle">
                    <h2 className="blogTitle">{blog?.Name}</h2>
                </div>
                <div className="blogArticle">
                    <p className="blogArticle">{blog?.article}</p>
                </div>
                <div className="blogDateBox">
                    <p className="blogDate">{blog?.date}</p>
                </div>
                <div className="blogLinkBox">
                    <a className="blogLink" href={blog?.link}>
                        Link
                    </a>
                </div>

            </div>
        </div>
    );
};


export default BlogModal;
