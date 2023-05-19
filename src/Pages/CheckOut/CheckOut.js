import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
const CheckOut = () => {
    const {_id, title, price } = useLoaderData()
    const { user } = useContext(AuthContext)
    const handlePlaceOrder=event=>{
        event.preventDefault()
        const form = event.target;
        console.log(form.firstName.value);
        console.log(form.lastName.value);
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = user?.email || 'Unregistered';
        const message = form.message.value;  

        const order ={
            service :_id,
            serviceName : title,
            price,
            customerName:name,
            email,
            phone,
            message
           
        }
        fetch('http://localhost:5000/orders',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                alert('Order Placed Successfully')
                form.reset();
            }
        })
        .catch(err=>console.error(err))
    }
    
    return (
        <div>
            <h2 className=' text-4xl my-5'>{title}</h2>
            <h3 className=' text-3xl mb-5'>Price: {price}</h3>
            <form onSubmit={handlePlaceOrder} className='mb-5'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-ghost border-black" />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-ghost border-black" />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-ghost border-black" />
                    <input name='email' type="text" placeholder="Your Email" className="input input-ghost border-black" defaultValue={user?.email} readOnly />
                </div>
                <div className='my-4'>
                    <textarea name='message' className="textarea border-black w-full" placeholder="Your Message"></textarea>
                </div>
                <div className='lg:text-end'>
                    <input className='btn' type="submit" value="Place Your Order" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;