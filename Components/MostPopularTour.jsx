import React from "react";
import "../Styles/MostPopularTour.css";
import Thailand from '../Assets/MostsellingTour/Thailand.jpg';
import Bali from '../Assets/MostsellingTour/Bali.jpg'
import Philipins from '../Assets/MostsellingTour/Philipins.jpeg'
import Azerbaijan from '../Assets/MostsellingTour/azerbaizan.jpg';
import Kazakhtan from '../Assets/MostsellingTour/Kazaksthan.jpg'
import Georgia from '../Assets/MostsellingTour/georgia.jpg'
import Vietnam from '../Assets/MostsellingTour/Vietnam.jpg'
import Armenia from '../Assets/MostsellingTour/Armenia.jpg'
import Srilnka from '../Assets/MostsellingTour/Srilnka.jpg'
import Maldives from '../Assets/MostsellingTour/Maldives.jpg'
import Europe from '../Assets/MostsellingTour/Europe.jpg'
import Mauritius from '../Assets/MostsellingTour/Mauritius.jpg'
import Uzbekistan from '../Assets/MostsellingTour/Uzbekistan.jpg'

const categories = [
  { Price:2000, title: "Escape to Bali ✈️", img: Bali,description:'THE BEAUTY OF THIS ISLAND IS  "UN-BALI- VABLE"',Ratting:4.5,days:'7 Days 4 Night' },
  { Price:3000, title: "Philipines", img: Philipins,description:'TROPICAL DREAM',Ratting:4.6,days:'7 Days 4 Night' },
  { Price:2000, title: "Thailand", img:Thailand,description:' ADVANTURE AWAITS IN THE LAND OF SMILE.',Ratting:4.8,days:'7 Days 4 Night' },
  { Price:2000, title: "Azerbaijan", img:Azerbaijan,description:'WHERE EUROPE MEETS ASIA',Ratting:4.8,days:'7 Days 4 Night' },
  { Price:2000, title: "Kazakhstan", img:Kazakhtan,description:'NOMADIC  SPRIT',Ratting:4.8,days:'7 Days 4 Night' },
  { Price:2000, title: "Georgia", img:Georgia,description:'TIMELESS CAUCASUS',atting:4.8,days:'7 Days 4 Night' },
  { Price:2000, title: "Vietnam", img:Vietnam,description:'TILELESS CHARM.',Ratting:4.8,days:'7 Days 4 Night' },
  { Price:2000, title: "Armenia", img:Armenia,description:'ALPINE PEAK',Ratting:4.8,days:'7 Days 4 Night' },
  { Price:2000, title: "Sri Lanka", img:Srilnka,description:'PEARL OF INDIAN OCEAN',Ratting:4.8,days:'7 Days 4 Night' },
  { Price:2000, title: "Maldives", img:Maldives,description:'ENDLESS BLUE',Ratting:4.8,days:'7 Days 4 Night' },
  { Price:2000, title: "Europe", img:Europe,description:'Europe is a beautiful continent with famous landmarks',Ratting:4.8,days:'7 Days 4 Night' },
  { Price:2000, title: "Mauritius", img:Mauritius,description:'Relax on sunny shores, feel the ocean breeze, and enjoy peaceful moments by the sea.',Ratting:4.8,days:'7 Days 4 Night' },
  { Price:2000, title: "Uzbekistan", img:Uzbekistan,description:'The Land of the Silk Road',Ratting:4.8,days:'7 Days 4 Night' },
];


export default function TourSlider() {
  return (
    <section className="tour-section">
      <h2>International Escapes</h2>

      <div className="tour-slider">
        {categories.map((tour) => (
          <div className="tour-card" key={tour.id}>
            <img src={tour.img} alt={tour.title} />

            <div className="tour-content">
              <h3>{tour.title}</h3>

              <p>
                {tour.description}
              </p>

              {/* <div className="tour-info">
                <span>🕒 {tour.days}</span>
                <span>⭐ {tour.Ratting}</span>
              </div> */}

              <div className="tour-footer">
                {/* <h4>{`${tour.Price}$`}</h4> */}

                <button>More Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
