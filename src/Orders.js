import React, { useEffect, useState } from 'react'
import './Orders.css'
import { useStateValue } from './StateProvider';
import Order from './Order'
import { db } from './firebase';


function Orders() {

  const[{basket, user}, dispatch] = useStateValue();
  const[orders, setOrders] = useState([]);

  useEffect(() => {

    if(user){
      db
      .collection('users') // accessing the users collection with id
      .doc(user?.uid) 
      .collection('orders')// accessing the particular user's orders
      .orderBy('created', 'desc') // order them
      .onSnapshot(snapshot => (
        setOrders(snapshot.docs.map(doc => ({  // mapping through the list of orders
          id: doc.id,
          data: doc.data()
        })))
      ))
    }else{
      setOrders([])
    }


  }, [user])
  return (
    <div className='orders'>
        <h1>Your Orders</h1>
        <div className='orders_order'>
          {orders?.map(order => (
              <Order order={order}/>
          ))}
        </div>
    </div>
  )
}

export default Orders