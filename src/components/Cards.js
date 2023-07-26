import React from 'react'
import Carditem from './Carditem'
import './Cards.css'

const Cards = () => {
  return (
    <div className='cards'>
        <h1>Chack out these EPIC Destinations!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <Carditem
                        src="images/img-9.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Adventure"
                        path="/services"
                    />
                    <Carditem
                        src="images/img-2.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Adventure"
                        path="/services"
                    />
                </ul>
                <ul className="cards__items">
                    <Carditem
                        src="images/img-3.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Adventure"
                        path="/services"
                    />
                    <Carditem
                        src="images/img-4.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Adventure"
                        path="/services"
                    />
                    <Carditem
                        src="images/img-5.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Adventure"
                        path="/services"
                    />
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Cards
