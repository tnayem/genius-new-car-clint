import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
    const { service_id, title, img, price, description, facility } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                <div className="flex text-orange-600">
                    <p className=' text-2xl font-semibold'>Price: ${price}</p>
                    <button className=""><FaArrowRight></FaArrowRight></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;