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

                const API_URL = process.env.REACT_APP_API_URL;
                // fetch blogs 
                const blogResponse = await fetch(`${API_URL}/api/blogs?populate=*`);

                const blogData = await blogResponse.json();
                setBlogs(blogData.data || []);


                // fetch Gallery
                const galleryResponse = await fetch(`${API_URL}/api/galleries?populate=*`);
                const galleryData = await galleryResponse.json();

                // process blog images
                const formattedBlogImages = blogData.data.flatMap(blogItem => {

                    if (!blogItem.images || Array.isArray(blogItem.images)) return []; // make sure image exists

                    return blogItem.images.map(image => {
                        // log the image object before using it 

                        return {
                            original: `${image.url}`, // directly access
                            thumbnail: image.formats.thumbnail ? `${image.formats.thumbnail.url}` : `${image.url}`,
                            description: blogItem.imageDescription || "No description",
                        };
                    });
                });
                setBlogImages(formattedBlogImages);

                //process images 
                const formattedGallery = galleryData.data.flatMap(galleryItem => {
                    if (!galleryItem.images || !Array.isArray(galleryItem.images)) return []; // make sure image exists

                    return galleryItem.images.map(image => {
                        // log the image object before using it
                        return {
                            original: `${image.url}`, // directly access
                            thumbnail: image.formats?.thumbnail ? `${image.formats.thumbnail.url}` : `${image.url}`,
                            description: galleryItem.imageDescription || "No description available", // imagedescription field
                        };
                    });
                });

                setGallery(formattedGallery);



            } catch (error) {
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