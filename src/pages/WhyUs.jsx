import React from 'react';
import './Home.css';

const WhyChooseUs = () => {
  return (
   
<div className="service">
  <h1>Why Choose Us</h1>
  <div className="alternating-section">
    {[
      {
        img: 'https://projekti-final-bit.netlify.app/images/w1.png',
        heading: 'Secure Investment',
        text: 'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus',
      },
      {
        img: 'https://projekti-final-bit.netlify.app/images/w2.png',
        heading: 'Secure Investment',
        text: 'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus',
      },
      {
        img: 'https://projekti-final-bit.netlify.app/images/w3.png',
        heading: 'Secure Investment',
        text: 'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus',
      },
      {
        img: 'https://projekti-final-bit.netlify.app/images/w4.png',
        heading: 'Secure Investment',
        text: 'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus',
      },
    ].map((item, index) => (
      <div className="item-row" key={index}>
        <div className="content-container">
          <img src={item.img} alt={`Image ${index + 1}`} />
          <h2>{item.heading}</h2>
          <p>{item.text}</p>
        </div>

      </div>
      
    ))}

  </div>
</div>
  );
};

export default WhyChooseUs;
