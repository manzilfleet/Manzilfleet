import React from 'react'
import '../Styles/OurServices.css'
import Goa from '../Assets/imgs/Goa.jpg';
import Amritsar from '../Assets/imgs/Amritsar.jpg';
import Agra  from '../Assets/imgs/Agra.jpg';
import Banaras from '../Assets/imgs/Banaras.jpg';
import Jaipur from '../Assets/imgs/Jaipur.jpg';
import Kerala  from '../Assets/imgs/worldBest.jpg';
import VIDEO from "../Assets/Hero-video-play.mp4"


const OurServices = () => {
  return (
    <div>
         <main>
        <section class="section-hero ">
            <div class="hero">
                <div class="hero-text-box">
                    <h1 class="heading-primary">Our Services</h1>
                    <div className='main-services'>
                        <div className='service'>
                            <h3>Group Travel</h3>
                            <p className='service-p'>Fixed Deparutures for travelers
                                seeking a community to travel with them.Ideal for - College students,
                                budget travelers and solo.</p>
                        </div>
                        <div className='service'>
                            <h3>Tailor-made Plans</h3>
                            <p className='service-p'>
                               Precisely curated travel plans for the travelers looking for 
                               flexibility, leisure and specific needs. 
                               Ideal for - Anyone with specific intent to travel
                            </p>
                        </div>
                        <div className='service'>
                            <h3>Leisure Vacations for Family and Honeymooners</h3>
                            <p className='service-p'>
                               Specially curated fixed packages for targeted audience with a
                               specified purpose to travel to create memorable and lifetime 
                               experiences. Ideal for - Families, Couples, Honeymooners.
                            </p>
                        </div>
                        <div className='service'>
                            <h3>Corporate/Institutional/Incentive Trips</h3>
                            <p className='service-p'>
                                Tours provided as rewards for corporates and 
                                educational trips for schools and colleges
                            </p>
                        </div>
                    </div>
                    
        
                    <div class="Tour-Our-Item">
                        <div class="Tour-Our-imgs">
                          <img src={Goa} alt="customers " />
                          <img src={Amritsar} alt="customers " />
                          <img src={Agra} alt="customers " />
                          <img src={Banaras} alt="customers " />
                          <img src={Jaipur} alt="customers " />
                          <img src={Kerala} alt="customers " />
                        </div>
                        <p class="Tour-Our-text">
                          <span>YOUR</span>TRAVEL STORY! 
                        </p>
                    </div>
                </div>
                   <section className="hero">
                         <video
                           className=""
                           autoPlay
                           muted
                           loop
                           playsInline
                         >
                           <source src={VIDEO} type="video/mp4" />
                           Your browser does not support the video tag.
                         </video>
                       </section>
            </div>
        </section>
    </main>
    </div>
  )
}

export default OurServices