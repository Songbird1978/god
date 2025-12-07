import React from 'react';
import { useEffect, useState } from 'react';
import './home.css';
import Album from '../../components/album/album';
import Listen from '../../components/listen/listen';
import Biography from '../biography/biography';
import InformationBar from '../../components/informationBar/informationBar';
import Blogs from '../../components/blogs/blogs.js';
import Subscribe from './subscribe.jsx';
import Tour from '../tour/tour.js';
import SEO from './components/SEO';


function Home() {

    const [blogs, setBlogs] = useState([]);
    const [formattedGallery, setGallery] = useState([]);
    const [formattedBlogImages, setBlogImages] = useState([]);
    const [hero, setHero] = useState([]);
    const [bio, setBio] = useState([]);
    const [contact, setContact] = useState([]);
    const [links, setLinks] = useState([]);

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

                // fetch bio data
                const bioResponse = await fetch(`${API_URL}/api/biographies?populate=*`);
                const bioData = await bioResponse.json();
                const paragraphs = bioData.data[0]?.paragraph || [];
                setBio(paragraphs);
                // console.log("bio formatted:", paragraphs);

                //fetch contact data - emails
                const contactResponse = await fetch(`${API_URL}/api/contacts?populate=*`);
                const contactData = await contactResponse.json();
                setContact(contactData.data || []);
                // console.log("contact:", contactData);

                // fetch links 
                const linkResponse = await fetch(`${API_URL}/api/links?populate=*`);
                const linkData = await linkResponse.json();
                setLinks(linkData.data || []);

                // fetch blogs 
                const blogResponse = await fetch(`${API_URL}/api/blogs?populate=*`);
                const blogData = await blogResponse.json();
                setBlogs(blogData.data || []);

                // fetch Gallery
                const galleryResponse = await fetch(`${API_URL}/api/galleries?populate=*`);
                const galleryData = await galleryResponse.json();

                // fetch hero image
                const heroResponse = await fetch(`${API_URL}/api/heroes?populate=*`);
                const heroData = await heroResponse.json();
                setHero(heroData.data || []);
                // console.log("hero:", heroData);

                // process blog images
                const formattedBlogImages = blogData.data.flatMap(blogItem => {

                    if (!blogItem.images || Array.isArray(blogItem.images)) return []; // make sure image exists

                    return blogItem.images.map(image => {
                        // log the image object before using it 

                        //console.log("formattedBlogImages:", image);

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
                            alt: galleryItem.imageDescription || "No description available"
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
    }, []

    );

    return (
        <>
          <SEO 
        title="Gary O'Donnell & the Dime Store Heroes"
        description="Portsmouth-based rock band. Listen to our music and check tour dates."
        url="/"
      />
            <div className="homeOrder">
                <Album id="albumId" hero={hero} />
                <Biography blogs={blogs} formattedGallery={formattedGallery} bio={bio} />
                <InformationBar blogs={blogs} />
                <Blogs blogs={blogs} formattedBlogImages={formattedBlogImages} />
                <Listen id="listenId" />
                <Tour id="tour" />
                <Subscribe id="contact" contact={contact} links={links} />
            </div>
        </>
    )
}

export default Home;