import '../Styles/Popular.css'
import Vietnam  from '../Assets/Website Pictures MFPL/Flyers/Copy of Minimalist Tourism and Travel Flyer.jpg';
import AZERBAIJAN  from '../Assets/Website Pictures MFPL/Flyers/Minimalist Tourism and Travel Flyer - AZ.jpg';
import BALI  from '../Assets/Website Pictures MFPL/Flyers/Minimalist Tourism and Travel Flyer - Bali.jpg';
import KAZAKHSTAN  from '../Assets/Website Pictures MFPL/Flyers/Minimalist Tourism and Travel Flyer - Kazak.jpg';
import PHILIPPINES  from '../Assets/Website Pictures MFPL/Flyers/Minimalist Tourism and Travel Flyer - Philippines.jpg';
import THAILAND  from '../Assets/Website Pictures MFPL/Flyers/Minimalist Tourism and Travel Flyer.jpg';




const destinations = [
  { name: "Vietnam", img: Vietnam,price:20 },
  { name: "AZERBAIJAN", img: AZERBAIJAN,price:20 },
  { name: "BALI", img: BALI,price:20 },
  { name: "KAZAKHSTAN", img: KAZAKHSTAN,price:20 },
  { name: "PHILIPPINES", img: PHILIPPINES,price:20 },
  { name: "THAILAND", img: THAILAND,price:20 },
];

export default function PopularDestinations() {
  return (
    <section className="tour-section">
      <h2>Popular Destinations</h2>
      <div style={{width: "100%"}} className="scroll-container ">
        {destinations.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.img} alt={item.name} />
          </div>
        ))}
      </div>
    </section>
  );
}