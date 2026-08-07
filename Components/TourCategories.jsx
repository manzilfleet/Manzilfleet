import React from "react";
import '../Styles/TourCategories.css'
import Goa from '../Assets/Tourcategery/Honymoon.jpeg';
import Adventure from '../Assets/Tourcategery/Adventure.jpg'
import Cultural from '../Assets/Tourcategery/Cultural.jpg'
import Luxury from '../Assets/Tourcategery/Luxury.jpeg'
import Family from '../Assets/Tourcategery/Family.jpg'


const categories = [
  { title: "Adventure Tours", img: Adventure },
  { title: "Cultural Tours", img: Cultural },
  { title: "Family Tours ", img:Family  },
  { title: "Honeymoon Tours", img: Goa},
  { title: "Luxury Escapes", img: Luxury },
];

export default function TourCategories() {
  return (
    <div className="tour-section container">
      {/* Floating icons */}
      <div className="icon camera">📷</div>
      <div className="icon ticket">🎟️</div>

      <p className="subtitle">Wonderful place for You</p>
      <h1 className="title">Tour Categories</h1>

      <div className="grid">
        {categories.map((item, i) => (
          <div className={`N-card N-card-${i}`} key={i}>
            <img src={item.img} alt={item.title} />
            <p className="place-name">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}