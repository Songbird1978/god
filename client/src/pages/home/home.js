import React from 'react';
import { useEffect, useState } from 'react';
import './home.css';
import Album from '../../components/album/album';
import Listen from '../../components/listen/listen';
import Biography from '../biography/biography';
import InformationBar from '../../components/informationBar/informationBar';
import Blogs from '../../components/blogs/blogs.js';
import Subscribe from './subscribe';


//import GaryLive from '../../assets/GaryODonnellLive.png';

function Home() {

    const [blogs, setBlogs] = useState([]);
    const [formattedGallery, setGallery] = useState([]);
    const [formattedBlogImages, setBlogImages] = useState([])

    useEffect(() => {
        // Fetch Blogs

        const fetchData = async () => {
            try {
                // fetch blogs 
                const blogResponse = await fetch("http://localhost:1337/api/blogs?populate=*");
                const blogData = await blogResponse.json();
                setBlogs(blogData.data || []);


                // fetch Gallery
                const galleryResponse = await fetch("http://localhost:1337/api/galleries?populate=*");
                const galleryData = await galleryResponse.json();
                console.log("Raw API Gallery Response:", galleryData);

                // process blog images
                const formattedBlogImages = blogData.data.flatMap(blogItem => {
                    if (!blogItem.images || Array.isArray(blogItem.images)) return [];
                    return blogItem.images.map(image => ({
                        original: `http://localhost:1337${image.url}`,
                        thumbnail: image.formats.thumbnail ? `http://localhost:1337${image.formats.thumbnail.url}` : `http://localhost:1337${image.url}`,
                        description: blogItem.imageDescription || "No description"
                    }));
                });

                setBlogImages(formattedBlogImages);
                console.log("Formatted Blog ImageData:", formattedBlogImages);

                //process images 
                const formattedGallery = galleryData.data.flatMap(galleryItem => {
                    if (!galleryItem.images || !Array.isArray(galleryItem.images)) return []; // make sure image exists

                    return galleryItem.images.map(image => ({
                        original: `http://localhost:1337${image.url}`, // directly access
                        thumbnail: image.formats?.thumbnail ? `http://localhost:1337${image.formats.thumbnail.url}` : `http://localhost:1337${image.url}`,
                        description: galleryItem.imageDescription || "No description available", // imagedescription field
                    }));
                });

                setGallery(formattedGallery);
                console.log("Formatted Gallery Data:", formattedGallery);

            } catch (error) {
                console.error("error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="homeOrder">
                <Album id="albumId" />
                <Biography blogs={blogs} formattedGallery={formattedGallery} />
                <InformationBar blogs={blogs} />
                <Blogs blogs={blogs} formattedBlogImages={formattedBlogImages} />
                <Listen id="listenId" />
                <Subscribe />
            </div>
        </>
    )
}

export default Home;