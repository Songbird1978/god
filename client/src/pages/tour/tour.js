
import React from 'react';
import { useState, useEffect } from 'react';
import './tour.css'
//import Navbar from '../../components/navbar/navbar';
import { motion, AnimatePresence } from 'framer-motion';
import tourBus from '../../assets/tourBus.png';

function Tour() {

    const [tourInfo, setTourInfo] = useState([]);
    const [direction, setDirection] = useState("right");
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [moveKey, setMoveKey] = useState(0);

    //calculate innerwidth of the window for different screen sizes
    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    //fetch tourInfo
    useEffect(() => {

        const fetchTourInfo = async () => {
            try {

                const API_URL = process.env.REACT_APP_API_URL;
                //fetch tourInfo
                const tourInfoResponse = await fetch(`${API_URL}/api/tours?populate=*`);

                const tourInfoData = await tourInfoResponse.json();
                setTourInfo(tourInfoData.data || []);

                console.log(tourInfoData.data);
            } catch (error) {
                console.error("error fetching tourInfo", error);
            }
        };
        fetchTourInfo();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDirection((prev) => (prev === "right" ? "left" : "right"));
            setMoveKey(prev => prev + 1);
        }, 10000); // syncs with the x transition duration (10s)

        return () => clearTimeout(timer);
    }, [moveKey]); // triggers when animation restarts

    const startX = direction === "right" ? -200 : screenWidth;
    const endX = direction === "right" ? screenWidth : -200;


    return (

        <div className="tourContainer" id="tour">
            <div className="tourTitle" style={{ width: "100%", color: "antiqueWhite", fontSize: "50px", fontFamily: "BigShoulder", }}>Tour</div>

            <div className="tourImgDiv">
                <AnimatePresence>
                    <motion.img
                        key={`${direction}-${moveKey}`}  // combines both state values
                        initial={{
                            x: startX,
                            scaleX: direction === "right" ? 1 : -1
                        }}
                        animate={{
                            x: endX,
                            scaleX: direction === "right" ? 1 : -1,
                            rotate: [0, 1, 0, -1, -2, -1, 0, 1]
                        }}
                        transition={{
                            rotate: { duration: 0.5, repeat: Infinity },
                            x: { duration: 10, ease: "linear" }
                        }}
                        onAnimationComplete={() => {
                            console.log("Animation done. Turning bus.");
                            setDirection((prev) => (prev === "right" ? "left" : "right"));
                            setMoveKey(prev => prev + 1); // re-triggers motion.img
                        }}
                        src={tourBus}
                        alt="tour bus"
                        className="tourBusImg"
                    />
                </AnimatePresence>
            </div>
            <table className="tableContainer">
                <tbody>
                    {tourInfo.length > 0 ? (
                        tourInfo.map((show, index) => {
                            return (

                                <tr key={index} className="showRow">
                                    <th className="city">{show.city}</th>
                                    <th className="country">{show.country}</th>
                                    <th className="venue">{show.venue}</th>
                                    <th className="date">{show.date}</th>
                                    <th className="link"><button className="linkBtn button"><a href={show.link}>Tickets</a></button></th>
                                </tr>

                            );
                        })
                    ) : (
                        <tr>
                            <th className="notTouring">We're not touring at the moment. Sign up to the mailing list or follow me on Social Media to hear about any shows we have coming up. </th>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Tour;