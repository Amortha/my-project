import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import useFirebase from './../../hooks/hooks';
import useAuth from './../../hooks/useAuth';

const PlaceOrder = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [details, setDetails] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    return (
        <div className="booking mb-5">
            <br /> <br />
            <h5 className="fw-bolder">Hello !! {user.displayName}😎</h5>
            <h3 className="fw-bolder">Do you want to book this package?</h3>
            <h3 className="fw-bolder">  Click  here 👇 to book this..  </h3>
            <Link to="/managetour">
                <button className="btn btn-warning   mt-2 ms-3 mb-4 fw-bold px-5 py-2">  Place Order ▶▶  </button>
            </Link> <br />
            <img className="w-25 rounded-3" src={details?.img} alt="" /> <br />
            <h3 className="mt-3 fw-bolder">{details?.name}</h3>
            <p className="fw-bolder">Tota cost : {details?.cost}</p>
            <Link to="/">
                <button className="btn btn-warning mt-2 mb-4 fw-bold px-5 py-2">◀◀ Go Back </button>
            </Link>

            <br />

        </div>
    );
};

export default PlaceOrder;