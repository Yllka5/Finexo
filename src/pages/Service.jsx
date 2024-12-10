import React from 'react'
import './Home.css';


const Service = () => {
  return (
    <div className="our-services">
        <div className="our">
          <h1>Our </h1>
          <span style={{ color: 'lightblue' }}>Service</span>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
          <div className="cards">
            <div className="card">
              <img className="bit" src="https://projekti-final-bit.netlify.app/images/s1.png" alt="wallet" />
              <h3>Currency Wallet</h3>
              <p>
                Fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </p>
              <button>Read more!</button>
            </div>
            <div className="card">
              <img className="bit" src="https://projekti-final-bit.netlify.app/images/s1.png" alt="wallet" />
              <h3>Currency Wallet</h3>
              <p>
                Fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </p>
              <button>Read more!</button>
            </div>
            <div className="card">
              <img className="bit" src="https://projekti-final-bit.netlify.app/images/s3.png" alt="wallet" />
              <h3>Currency Wallet</h3>
              <p>
                Fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </p>
              <button>Read more!</button>
            </div>
            
          </div>
        </div>
      </div>
      
  )
}

export default Service