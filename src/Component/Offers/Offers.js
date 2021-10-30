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
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{description}</p>
                        <p class="card-text">{cost}</p>
                        <Link to={`/placeorder/${_id}`}>
                            <button>Book now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;