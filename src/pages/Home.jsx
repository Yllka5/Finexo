import React, { useState } from 'react';
import About from './About.jsx';
import Service from './Service.jsx';
import WhyUs from './WhyUs.jsx';
import Team from './Team.jsx';
import './Home.css';

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      title: 'CRYPTO CURRENCY',
      description:
        'Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequitur.',
      img: 'https://projekti-final-bit.netlify.app/images/slider-img.png',
    },
    {
      title: 'CRYPTO CURRENCY',
      description:
        'Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequitur.',
      img: 'https://projekti-final-bit.netlify.app/images/slider-img.png',
    },
    {
      title: 'CRYPTO CURRENCY',
      description:
        'Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequitur.',
      img: 'https://projekti-final-bit.netlify.app/images/slider-img.png',
    },
  ];

  const goToSlide = (index) => setActiveIndex(index);

  return (
    <>
      <div className="home-container">
        <div className="content-section">
          <h1 className="main-heading">{slides[activeIndex].title}</h1>
          <p className="description">{slides[activeIndex].description}</p>
          <button className="btn">Read More</button>
        </div>
        <div className="image-section">
          <img
            src={slides[activeIndex].img}
            alt={`${slides[activeIndex].title} Illustration`}
          />
        </div>
      </div>

      <div className="pagination">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>

      <Service />
      <About />
      <WhyUs />
      <Team />
    

    </>
  );
};

export default Home;
