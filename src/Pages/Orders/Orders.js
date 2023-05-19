import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Orders = () => {
    const {user} = useContext(AuthContext)
    const [orders,setOrders]=useState({})
    const url = `http://localhost:5000/orders?email=${user?.email}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[user?.email])
    return (
        <div>
            <h2 className="text-5xl">This is Orders Page</h2>
            <h3 className='text-4xl'>You have {orders.length} Orders</h3>
        </div>
    );
};

export default Orders;