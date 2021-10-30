import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import useFirebase from './../../hooks/hooks';

const PlaceOrder = () => {
    const { id } = useParams();
    // const { user } = useFirebase();
    const [details, setDetails] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    return (
        <div>
            <h1>i am from place order</h1>
            <h3>thiis is :{id}</h3>
            <h2>details{details.name}</h2>
        </div>
    );
};

export default PlaceOrder;