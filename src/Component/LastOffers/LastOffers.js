import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import LastOffer from '../LastOffer/LastOffer';

const LastOffers = () => {
    const [offers, setOffers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/offers')
            .then(res => res.json())
            .then(data => setOffers(data))
    }, [])
    return (
        <div className="container">
            <div className="my-5">
                <h1 className="fw-bolder">Last Minute <span className="text-danger"> Offers</span></h1>
                <p>Book these package right now and get awesome offer in every package</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-0">
                {
                    offers.map(offer => <LastOffer
                        key={offers.id}
                        offer={offer}
                    ></LastOffer>)
                }
            </div>
        </div>
    );
};

export default LastOffers;