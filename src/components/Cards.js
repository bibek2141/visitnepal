import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img1.jpg'
              text='Explore Annapurna Mountain'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img2.jpg'
              text='Durbar Square in Kathmandu'
              label='Shopping'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img3.jpg'
              text='Explore Langtan Region'
              label='Trekking'
              path='/services'
            />
            <CardItem
              src='images/img4.jpg'
              text='Experience deep inside Fewa Lake and surrounding region'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img5.jpg'
              text='Visit Beautiful Scenery of Chitwan National Park'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img6.jpg'
              text="Scenes of Daily Life in Bhaktapur's Durbar Square"
              label='Gateway'
              path='/services'
            />
            <CardItem
              src='images/img7.jpg'
              text="Check out the products we offer"
              label='Products'
              path='/products'
            />
            <CardItem
              src='images/img8.jpg'
              text="Sign up for more information"
              label='Sign Up'
              path='/sign-up'
            />

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
