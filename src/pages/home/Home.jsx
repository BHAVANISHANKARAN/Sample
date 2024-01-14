import React from 'react'
import Profile from "../../assets/naan.jpeg"
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import "./home.css"
const home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>Hello! This is Bhavanishankaran</span> Web Developer
          </h1>
          <p className="home__description">
            I am a Web Development enthusiast focused on learning web tools and frameworks
          </p>

          <Link to='/about' className='button'>
            More about me 
            <span className='button__icon'>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block">
        
      </div>
    </section>
  )
}

export default home
