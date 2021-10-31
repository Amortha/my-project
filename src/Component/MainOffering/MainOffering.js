import React, { useEffect, useState } from 'react';
import Offers from '../Offers/Offers';

const MainOffering = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        // fetch('https://evening-headland-28717.herokuapp.com/service')
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="container">
            <h1 className="my-5 fw-bolder">Perfect <span className="text-warning"> Tours</span></h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    services.map(service => <Offers
                        key={services.id}
                        service={service}
                    ></Offers>)
                }
            </div>
        </div>
    );
};

export default MainOffering;