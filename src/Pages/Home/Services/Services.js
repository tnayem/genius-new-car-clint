import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [Services,setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div>
            <div className='text-center py-5'>
                <p className='text-orange-600 font-bold text-2xl'>Services</p>
                <h2 className='text-5xl font-semibold'>Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    Services.map(service=><ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center py-9'>
                <button className='btn bg-orange-600 border-none'>More Services</button>
            </div>
        </div>
    );
};

export default Services;