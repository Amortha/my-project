import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="banner-container">
                <div className="banner-image">
                    <div className="title-container text-center">
                        <div className="title">
                            <h1 className="text-light">Enjoy the tour with <br /> ghurbo</h1>
                            <h6 className="text-light">We provide travelers with an authentic Jordanian experience that they <br />
                                can remember for the rest of the lives</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;