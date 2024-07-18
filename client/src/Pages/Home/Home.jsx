import React from 'react'
import Slider from "../../Components/Slider/Slider"
import Featuredproduct from "../../Components/Featuredproduct/Featuredproduct"
import Categories from "../../Components/Categories/Categories"
import Contact from "../../Components/Contact/Contact"
import { userData } from "../../helpers"


const Home = () => {
  const { username  } = userData();
  return (
    <div className='Home'>
      <Slider />
      <Featuredproduct type="featured" />
      <Categories />
      <Featuredproduct type="trending"/>
      <Contact />
      
      
    </div>
  )
}

export default Home
