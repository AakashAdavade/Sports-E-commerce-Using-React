import React, { useState, useEffect } from 'react';
import { AiFillCaretRight } from 'react-icons/ai';
import { AiFillCaretLeft } from 'react-icons/ai';
import './Slider.scss';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        'https://wallpapers.com/images/featured-full/indian-cricket-g8wl4uwm62bu7830.jpg',
        'https://media.gettyimages.com/id/1175947478/photo/indian-football-team-practice-for-world-cup-qualifier-against-bangladesh.jpg?s=2048x2048&w=gi&k=20&c=fXTmacVWqZxprVC6E4GeVhtWf_MpABW6pyY03xN70g0=',
        'https://img.olympicchannel.com/images/image/private/t_s_w1340/t_s_16_9_g_auto/f_auto/primary/wtchgvqs9hted6fbqhi8',
        'https://ss-i.thgim.com/public/volleyball/v64onu/article65898741.ece/alternates/LANDSCAPE_1200/U20',
        'https://thebridge.in/h-upload/2022/04/11/25918-indian-men-hockey-team.webp',
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1);
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1);
    };

    // Function to automatically switch to the next slide
    const autoSlide = () => {
        setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    };

    useEffect(() => {
        // Set an interval to change the slide every 3 seconds (adjust as needed)
        const slideInterval = setInterval(autoSlide, 3000);

        // Clear the interval when the component unmounts
        return () => clearInterval(slideInterval);
    }, []);

    return (
        <div className="slider">
            <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
                {/* <img src={data[3]} alt="" />
                <img src={data[4]} alt="" /> */}
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <AiFillCaretLeft />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <AiFillCaretRight />
                </div>
            </div>
        </div>
    );
};

export default Slider;
