import React, { useEffect, useState } from 'react';
import './Attractions.css';
import Attraction from '../Attraction/Attraction';

const Attractions = () => {
    const [attractions, setAttractions] = useState([]);

    useEffect(() => {
        fetch('attractions.json')
            .then(res => res.json())
            .then(data => setAttractions(data))
    }, [])
    return (
        <div className="container">
            <h1 className="my-5">Top Attractions</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    attractions.map(attraction => <Attraction
                        key={attraction.id}
                        attraction={attraction}
                    >

                    </Attraction>)
                }
            </div>
        </div>
    );
};

export default Attractions;