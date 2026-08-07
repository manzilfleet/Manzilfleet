import React from 'react'
import Hero from '../Components/Hero';
import Popular from '../Components/Popular';
import TourCategories from '../Components/TourCategories';
import ExploreIndia from '../Components/ExploreIndia';
import MostPopularTour from '../Components/MostPopularTour';
import TravelSection from '../Components/TravelSection';
import OwnerPOV from '../Components/OwnerPOV';
import OurServices from '../Components/OurServices';

const Home = () => {
  return (
    <div>
     <Hero/>
     <TourCategories/>
     <OurServices/>
     <Popular/>
     <MostPopularTour/>
     <ExploreIndia/>
     <TravelSection/>
     <OwnerPOV/>
    </div>
  )
}

export default Home