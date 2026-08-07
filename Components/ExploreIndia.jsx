
import Goa from '../Assets/imgs/Goa.jpg';
import Ladakh from '../Assets/imgs/Ladhakh.jpeg';
import NorthEast  from '../Assets/imgs/NorthEast.jpeg';
import Kashmir from '../Assets/imgs/Kashmir.jpg';
import Kerala  from '../Assets/imgs/worldBest.jpg';
import Manali  from '../Assets/imgs/manali.jpg';
import CHARDHAM from '../Assets/imgs/KedarNath Img.jpg'


const destinations = [
  { name: "CHARDHAM YATRA", img: CHARDHAM,price:20,days:"5 Day 4 Night",Ratting:4.3,description:"The Sacred Journey of Faith" },
  { name: "Andaman and Nicobar Islands", img: Goa,price:20,days:"5 Day 4 Night",Ratting:4.3,description:"BAREFOOT ESCAPE " },
  { name: "Himachal Pradesh", img: Manali,price:10,days:"5 Day 4 Night",Ratting:4.3,description:"SKY ABOVE EARTH BELOW PEACE WITHIN." },
  { name: "Ladakh", img: Ladakh,price:30,days:"5 Day 4 Night",Ratting:4.3,description:"RAW NATURE" },
  { name: "North East ", img: NorthEast ,price:10,days:"5 Day 4 Night",Ratting:4.3,description:"HIDDEN PARADISE" },
  { name: "Kashmir", img: Kashmir,price:10,days:"5 Day 4 Night",Ratting:4.3,description:"NATURE'S MASTERPIECE" },
  { name: "Kerala", img: Kerala,price:30,days:"5 Day 4 Night",Ratting:4.3,description:"Kerala's scenic beauty, backwaters, beaches, hills, and rich natural landscape." }
];


export default function TourSlider() {
  return (
    <section className="tour-section">
      <h2>Explore India</h2>

      <div className="tour-slider">
        {destinations.map((tour) => (
          <div className="tour-card" key={tour.id}>
            <img src={tour.img} alt={tour.title} />

            <div className="tour-content">
              <h3>{tour.name}</h3>

              <p>
                {tour.description}
              </p>

              {/* <div className="tour-info">
                <span>🕒 {tour.days}</span>
                <span>⭐ {tour.Ratting}</span>
              </div> */}

              <div className="tour-footer">
                {/* <h4>{`${tour.price}$`}</h4> */}

                <button>More Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


