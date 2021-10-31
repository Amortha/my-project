import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './ManageTour.css';
// import useAuth from './../../hooks/useAuth';
import { useState, useEffect } from 'react';

const ManageTour = () => {
    // const { user } = useAuth();
    const [booking, setBooking] = useState([]);

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://evening-headland-28717.herokuapp.com/orders', data)
            .then(response => {
                if (response.data.insertedId) {
                    alert('You have confirmed your package. Plz reload this page');
                    reset();
                }
                console.log(response);
            })
    }

    useEffect(() => {
        fetch(`https://evening-headland-28717.herokuapp.com/booking`)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])

    return (
        <div className="mt-5 container-fluid">
            <div className="row">
                <div className="col-md-8  col-sm-12">
                    <div className="booking">
                        <h1>Confirm Your Booking</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="fw-bold" {...register("name", { required: true, maxLength: 20 })} placeholder=" Package Name (same as shown in ui)" />
                            <textarea className="fw-bold" {...register("description", { required: true })} placeholder=" Package Description" />
                            <input className="fw-bold" type="number" {...register("cost", { required: true })} placeholder=" Total Cost" />
                            <input className="fw-bold" {...register("img", { required: true })} placeholder=" Image Url " />
                            <input className="bg-warning px-3 py-2 border-0 fw-bold fs-4" type="submit" />
                        </form>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <h1>My Booking</h1>
                    {
                        booking.map(book => <div><h4>Package Name:{book.name}</h4></div>)
                    }
                </div>
            </div>
        </div >
    );
};

export default ManageTour;