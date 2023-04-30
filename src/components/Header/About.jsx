import React from 'react';
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer';
import './About.css'

export const About = () => {
  return (
    <div>
        <Navbar />
            <section className='about'>
                <div className='about-info'>
                    <div className='about-info-container'>
                    <h1>About Paperize</h1>
                    <p>Paperize fetches top images from Unsplash API. They're updated every day.
                        They are high resolution. There are two options available to choose from. Either Desktop or Smartphone.
                        The resolution depends upon the device type you select.
                        Resolution is 3840x2160 for Desktop and 1440x3120 for Smartphone.
                        The design language for this project was inspired from&nbsp;
                        <a href="http://github.com/98mohitkumar" >Mohit Kumar</a>'s prjects
                        </p>
                    
                    </div>
                    <h3 className='unsplash'>Visit 
                        <a href="https://unsplash.com"> Unsplash</a>
                    </h3>
                </div>
            </section>
        <Footer />
    </div>
  )
}

export default About