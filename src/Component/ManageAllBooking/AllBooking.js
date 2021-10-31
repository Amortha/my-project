import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const AllBooking = () => {
    // const { user } = useAuth();
    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch(`https://evening-headland-28717.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => setTours(data))
    }, []);

    const handleDelete = id => {
        const url = `https://evening-headland-28717.herokuapp.com/services/${id}`;
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
        <div>
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

                        </div>
                    </div>

                )
            }
        </div>
    );
};

export default AllBooking;