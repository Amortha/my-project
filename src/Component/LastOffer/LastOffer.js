import React from 'react';
import './LastOffer.css';
const LastOffer = (props) => {
    const { img, name, off } = props.offer;
    console.log(props.offer);
    return (

        <div className="col">
            <div className="card">
                <div className="card">
                    <img src={img} className="card-img-top" alt="..." />
                </div>
                <div className="layer">
                    <h1>{name}</h1>
                    <h5>{off}OFF</h5>
                </div>
            </div>
        </div>
    );
};

export default LastOffer;