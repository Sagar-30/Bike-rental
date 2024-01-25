import React, { useState ,useEffect } from 'react';
import './shoppingcomponent.css'
import { Scooter } from 'react-bootstrap-icons';
import { CurrencyDollar } from 'react-bootstrap-icons';

export default function CardSlider(){
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < products.length - 3 ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : products.length - 3
    );
  };
  const [products, setproducts] = useState();

  useEffect(data=>{
      fetch('https://fakestoreapi.com/products')
      .then(data => data.json())
      .then(alldata =>{
         setproducts(alldata);
      })
  },[]);
  return (
    <section>
        <div className='shopping-top-section'>
            <span><Scooter style={{height:'5rem', width:'auto'}} /></span>
            <h3>Our Shop</h3>
            <p>You can but cool accessories and more..</p>
        </div>
    <div className="card-slider">
      <button className="prev-button" onClick={prevSlide}>
        Previous
      </button>
      <div className="card-container" >
        {
        products && products.slice(currentIndex, currentIndex + 3).map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} alt="" />
            <h5>{card.title}</h5>
            <p>category: {card.category}</p>
            <hr />
            <p><b>Price: </b> <CurrencyDollar />{card.price}</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
      <button className="next-button" onClick={nextSlide}>
        Next
      </button>
    </div>
    </section>
  );
};

