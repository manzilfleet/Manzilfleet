import React from 'react'
import MostPopularTour from '../Components/MostPopularTour'
import ExploreIndia from '../Components/ExploreIndia'
import TourCategories from '../Components/TourCategories'
import OurServices from '../Components/OurServices';

const Tour = () => {
  return (
    <div>
     <OurServices/>
     <MostPopularTour/>
     <ExploreIndia/>
     <TourCategories/>
    </div>
  )
}

export default Tour