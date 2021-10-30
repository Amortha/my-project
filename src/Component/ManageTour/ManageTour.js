import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import useAuth from './../../hooks/useAuth';

const ManageTour = () => {
    const { user } = useAuth();
    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setTours(data))
    }, []);

    const handleDelete = id => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    const remaining = tours.filter(tour => tour._id !== id);
                    alert('Your tour package is successfully deleted');
                    setTours(remaining);
                }

            })
    }
    return (
        <div className="m-5 mb-5" >
            <div className="row">
                <div className=" col-md-4 col-sm-12">
                    <h1>User Information</h1>
                    <input type="text" value={user?.displayName} />
                    <br />
                    <input type="text" value={user?.email} />
                </div>
                <div className=" col-md-8 col-sm-12">
                    <h2>My Tour packag </h2>
                    {
                        tours.map(tour =>
                            <div className="container-fluide bg-light" key={tour._id}>
                                <div className="d-felx">


                                    <Card.Body>
                                        <Card.Title><small>Package Name: </small>{tour.name}</Card.Title>
                                        <Card.Footer>
                                            <div>
                                                <button onClick={() => handleDelete(tour._id)} >Delete ❌</button >
                                                <button className="bg-success ms-2 text-white  " >Update ✔ </button>
                                            </div>
                                        </Card.Footer>

                                    </Card.Body>


                                    {/* <div>
                                <h2> <small>Package Name: </small>{tour.name}</h2>
                            </div>
                            <div>
                                <button onClick={() => handleDelete(tour._id)} >Delete ❌</button >
                                <button className="bg-success ms-2 text-white  " >Update ✔ </button>
                            </div> */}


                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div >
    );
};

export default ManageTour;