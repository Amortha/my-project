import React from 'react';
import { Link } from 'react-router-dom';
import './Offers.css'
const Offers = (props) => {
    const { _id, img, name, cost, description } = props.service;
    return (
        <div>
            <div className="col">
                <div className="card">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title fw-bolder">{name}</h3>
                        <p className="card-text">{description}</p>
                        <p className="card-text fw-bolder">Total Cost : {cost}</p>
                        <p>Select : ✈   🚌   🚎</p>
                        <Link to={`/placeorder/${_id}`}>
                            <button className="btn btn-warning rounded px-5 ">Book now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;