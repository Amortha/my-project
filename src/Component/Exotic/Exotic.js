import React from 'react';

const Exotic = (props) => {
    const { img, name, tours } = props.place;
    return (
        <div>
            <div className="col">
                <div className="card">
                    <div className="card">
                        <img src={img} className="card-img-top" alt="..." />
                    </div>
                    <div className="layer">
                        <h1>{name}</h1>
                        <h5>Total Tour : {tours}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exotic;