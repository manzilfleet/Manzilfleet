// TravelSection.jsx
import React from "react";
import "../Styles/travel.css";
import Adventure from '../Assets/Tourcategery/Adventure.jpg'
import Luxury from '../Assets/Tourcategery/Luxury.jpeg'
import Family from '../Assets/Tourcategery/Family.jpg'
import Priyansh from '../Assets/priyansh.jpg'

const TravelSection = () => {
  return (
    <div className="travel-container-T container">
      
      {/* LEFT SIDE IMAGES */}
      <div className="image-section-T">
        <img src={Adventure} alt="travel1" className="img large" />
        <img src={Luxury} alt="travel2" className="img tall" />
        <div className="experience-box-T">
        <img src={Family} alt="travel1" className="img large" />
        </div>
      </div>

      {/* RIGHT SIDE CONTENT */}

      <div className="about-section">
       <div className="content-section-T">
        <p className="tag">About Company</p>

        <h1 className="about-h-1">
         WHY VALUES BEFORE BUSINESS..<br />
        </h1>

        <p className="desc">
         Embark on a journey where every horizon invites wonder and every step tells a story. We have a strong network of ground support globally where we believe that all the services required to make a a complete travel journey should be well acknowledged and appreciated so that as a result, the best outcomes are experienced by our clients. We cater travel related segments like Flights, Hotels, Consolidated Travel packages, Cruise Packages and travel assistance.
        
        </p>

        <div className="author">
        <button className="btn">Start Your Journey</button>
          <img src={Priyansh} alt="author" />
          <div>
            <h5>- Priyansh Tiwari</h5>
            <p>Managing Director</p>
          </div>
        </div>
       </div>
          <div className="features">
          <div className="feature">
            <h4><ion-icon name="eye-outline"></ion-icon>VISION</h4>
            <p className="p-2">Our Vision is to set a global benchmark as a travel
service provider where all the dynamics, aspects and market
needs are covered under one name of the system.</p>
          </div>
          <div className="feature">
            <h4><ion-icon name="rocket-outline"></ion-icon>Mission</h4>
            <p className="p-2">The Mission is to aspire every traveler and inspire
the professionals, while providing seamless travel services
through putting a valuable impact and making the return on
your investment, a worth.
</p>
          </div>
          <div className="feature">
            <h4><ion-icon name="golf-outline"></ion-icon>Goal</h4>
            <p className="p-2">Our Goal is to provide complete customer
satisfaction throughout the journey by ensuring the response
protocols, making the expenditure on an efficient side while
maintaining travel standards and policies for a sustainable
travel and tourism.
</p>
          </div>
          </div>
      </div>
    </div>
  );
};

export default TravelSection;