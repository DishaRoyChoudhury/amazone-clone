import React from 'react'
import "./Home.css"
import HomeImage from './HomeImage.jpg'
import Product from './Product'
import ZerToOne from './ZerToOne.jpg'
import AtomicHabits from './AtomicHabits.jpg'
import Alexa from './Alexa.jpg'
import EchoShow from './EchoShow.jpg'
import Tribit from './Tribit.jpg'
import TV from './TV.jpg'

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img className='home_image' src={HomeImage} alt="image1"/>
            <div className='home_row'>
                <Product id= "1212345" title="Zero  to One" price={300} image={ZerToOne} rating={4}/>
                <Product id= "1212675" title="Atomic Habits" price={475} image={AtomicHabits} rating={5}/>
            </div>
            <div className='home_row'>
                <Product id= "1692345" title="All-New Echo Dot (5th Gen, 2023 release) " price={4449} image={Alexa} rating={4}/>
                <Product id= "1213045" title="Tribit [Upgraded Version StormBox Pro Bluetooth Speaker 40W 5.3 Channel Wireless Portable Speaker" price={8199} image={Tribit} rating={4}/>
                <Product id= "1542345" title="All new Echo Show 5 (2nd Gen, 2021 release) - Smart speaker with 5.5" price={4499} image={EchoShow} rating={4}/>
            </div>
            <div className='home_row'>
                <Product id= "1692115" title="Samsung 34-inches 86.42cm LED Odyssey G5 Ultra WQHD, 165 Hz, 1ms, 1000R Curved Gaming Monitor, HDR10, AMD FreeSync Premium -LC34G55TWWWXXL, Black, 3440 X 1440 (WQHD) Pixels " price={45900} image={TV} rating={5}/>
            </div>
        </div>
    </div>
  )
}

export default Home