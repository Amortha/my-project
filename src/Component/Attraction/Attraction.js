import React from 'react';

const Attraction = ({ attraction }) => {
    const { name, img, tours } = attraction;
    return (
        <div>
            <div className="col">
                <div className="card">
                    <div>
                        <img src={img} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{tours} tours and activities</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Attraction;