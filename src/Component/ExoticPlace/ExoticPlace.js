import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Exotic from '../Exotic/Exotic';

const ExoticPlace = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/exotic')
            .then(res => res.json())
            .then(data => {
                setPlaces(data)
            })
    }, [])
    return (
        <div className="container my-5">
            <div className="my-5">
                <h1>Go Exotic <span className="text-success"> Places</span></h1>
                <p>When it comes to exploring exotic places, the choices are numerous. Whether you like peaceful <br /> destinations or vibrant landscapes, we have offers for you.</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-0">
                {
                    places.map(place => <Exotic
                        key={places.id}
                        place={place}
                    >
                    </Exotic>)
                }
            </div>
        </div>
    );
};

export default ExoticPlace;