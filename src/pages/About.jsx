import React from 'react'
import './Home.css';


const About = () => {
  return (
    <div className="us">
    <div className="about">
      <h1>About Us</h1>
      <p>
        Magni quod blanditiis non minus sed aut voluptatum illum quisquam aspernatur ullam vel beatae rerum ipsum voluptatibus
      </p>
    </div>
    
    <div className="row">
      <div className="img-container">
        <img src="https://projekti-final-bit.netlify.app/images/about-img.png" alt="About Us" />
      </div>
      <div className="txt">
        <h1>We Are Finexo</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All
          Molestiae odio earum non qui cumque provident voluptates, repellendus exercitationem, possimus at iste corrupti officiis unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam ab omnis quasi expedita.
        </p>
        <button className='btn'>Read more</button>
      </div>
    </div>
  </div>
  

  )
}

export default About