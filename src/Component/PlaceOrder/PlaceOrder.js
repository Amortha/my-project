import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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
        <div className="booking mb-5">
            <br /> <br />
            <h3 className="fw-bolder"> {details?.name} Service IS BOOKED .  </h3>
            <h3 className="fw-bolder">  Click 👇 to continue  </h3>
            <Link to="/managetour">
                <button className="btn btn-warning   mt-2 ms-3 mb-4 fw-bold p-3 rounded-pill">  Place Order ▶▶  </button>
            </Link> <br />
            <img className="w-25 rounded-3" src={details?.img} alt="" /> <br />
            <Link to="/">
                <button className="btn btn-warning mt-4 mb-4 fw-bold p-3 rounded-pill">◀◀ Go Back </button>
            </Link>

            <br />

        </div>
    );
};

export default PlaceOrder;