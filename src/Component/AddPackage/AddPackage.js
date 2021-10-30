import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddPackage.css';

const AddPackage = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/services', data)
            .then(response => {
                if (response.data.insertedId) {
                    alert('Your booking is successfully add');
                    reset();
                }
                console.log(response);
            })
    }

    return (
        <div className="tour" >
            <h1 className="mt-5 fw-bolder">Booking and place order Your Tour Schedule</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="fw-bold" {...register("name", { required: true, maxLength: 20 })} placeholder=" Package Name" />
                <textarea className="fw-bold" {...register("description", { required: true })} placeholder=" Package Description" />
                <input className="fw-bold" type="number" {...register("cost", { required: true })} placeholder=" Total Cost" />
                <input className="fw-bold" {...register("img", { required: true })} placeholder=" Image Url " />
                <input className="bg-warning rounded-pill p-2 border-0 fw-bold fs-4" type="submit" />
            </form>
        </div>
    );
};

export default AddPackage;