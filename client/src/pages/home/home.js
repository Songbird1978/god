import React from 'react';
import { useEffect, useState } from 'react';
import './home.css';
import Album from '../../components/album/album';
import Listen from '../../components/listen/listen';
import Biography from '../biography/biography';
import InformationBar from '../../components/informationBar/informationBar';
import Blogs from '../../components/blogs/blogs.js';
import Subscribe from './subscribe';


function Home() {

    const [blogs, setBlogs] = useState([]);
    const [formattedGallery, setGallery] = useState([]);
    const [formattedBlogImages, setBlogImages] = useState([]);

    // 1. Define the filterDuplicates function inside the Home component
    function filterDuplicates(images) {
        const seen = new Set();
        const uniqueImages = [];

        images.forEach(image => {
            const imageKey = `${image.original}-${image.thumbnail}`;

            if (!seen.has(imageKey)) {
                uniqueImages.push(image);
                seen.add(imageKey); // Track this combination as seen
            }
        });

        return uniqueImages;
    }

    useEffect(() => {
        // Fetch Blogs

        const fetchData = async () => {
            try {

                const API_URL = process.env.REACT_APP_API_URL;
                // fetch blogs 
                const blogResponse = await fetch(`${API_URL}/api/blogs?populate=*`);

                const blogData = await blogResponse.json();
                setBlogs(blogData.data || []);

                //check raw blog data

                // fetch Gallery
                const galleryResponse = await fetch(`${API_URL}/api/galleries?populate=*`);
                const galleryData = await galleryResponse.json();

                //check raw gallery data

                // process blog images
                const formattedBlogImages = blogData.data.flatMap(blogItem => {

                    if (!blogItem.images || Array.isArray(blogItem.images)) return []; // make sure image exists

                    return blogItem.images.map(image => {
                        // log the image object before using it 

                        console.log("formattedBlogImages:", image);

                        return {
                            original: `${image.url}`, // directly access
                            thumbnail: image.formats.thumbnail ? `${image.formats.thumbnail.url}` : `${image.url}`,
                            description: blogItem.imageDescription || "No description",
                        };
                    });
                });
                setBlogImages(formattedBlogImages);

                //process gallery images 
                const formattedGallery = galleryData.data.flatMap(galleryItem => {
                    if (!galleryItem.images || !Array.isArray(galleryItem.images)) return []; // make sure image exists

                    return galleryItem.images.map(image => {
                        // handle Cloudinary URLs correctly 
                        const imageUrl = image.url.startsWith("http") ? image.url : `${API_URL}${image.url}`;
                        const thumbnailUrl = image.formats?.thumbnail?.url.startsWith("http")
                            ? image.formats.thumbnail.url
                            : `${API_URL}${image.formats?.thumbnail?.url}`;

                        return {
                            original: imageUrl,
                            thumbnail: thumbnailUrl,
                            description: galleryItem.imageDescription || "No description available", // imagedescription field
                        };
                    });
                });

                // Filter out duplicates from the gallery images
                const uniqueGalleryImages = filterDuplicates(formattedGallery);

                // update state with unique gallery images
                setGallery(uniqueGalleryImages);

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