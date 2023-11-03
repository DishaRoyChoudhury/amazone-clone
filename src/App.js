import React, { useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} 
from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login'; 
import Orders from './Orders';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const promise = loadStripe("pk_test_51O1tvNSCZeiwYfAAyNlGsoknapO9CkPt0XVo5LtAmNLBkXnjs82ZJizEFfrx8y7nW9BJeczevlLC0NJLe1f6wcVK008S2GiGYt")

function App() {

  const[{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app components loads
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>' , authUser)

      if(authUser){
        //the user just logged in / was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])

  return (
  
    <Router>
      <div className="App">
        <Header/>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/orders' element={<Orders/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/payment'
                  element={(
                    <Elements stripe={promise}>
                      <Payment />
                    </Elements>
                  )}
              />
            <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
