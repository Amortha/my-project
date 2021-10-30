import React, { useEffect, useState } from 'react';
import Offers from '../Offers/Offers';

const MainOffering = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="container">
            <h1>Main Offereing</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    services.map(service => <Offers
                        key={services._id}
                        service={service}
                    ></Offers>)
                }
            </div>
        </div>
    );
};

export default MainOffering;