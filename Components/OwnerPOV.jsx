// OwnerPOV.jsx
import React from "react";
import "../Styles/ownerpov.css";
import aboutimg from '../Assets/priyansh_about_img/WhatsApp Image 2026-05-24 at 18.18.57.jpeg'

const OwnerPOV = () => {
  return (
    <section className="owner-section container">
      <div className="owner-left">
        <h1>The Owner’s POV</h1>
        <p>
After Graduating from Indian Institute of Tourism and Travel
Management (IITTM), Gwalior, started his 8 years travel-corporatejourney with a common motive to learn, earn and grow. From
working with leading travel brands and MNC’s to working and
supporting various travel startups, the dynamics and depth of
tourism industry was enough to keep him inclined, interested and
intended. The different sectors, segments, departments and
verticals (all of travel industry), shaped the career well. The curiosity
for knowing the less known aligned with his ‘always a learner
attitude’ and the passion for travel motivated him to serve better
and grow together..
        </p>

        <div className="quote">
          “You don't know how strong you are, until being strong is the only
          choice you have”
        </div>

        <div className="owner-name">
          <h2>– Priyansh Tiwari</h2>
          <span>Managing Director</span>
        </div>
      </div>

      <div className="owner-right">
        <img
          src={aboutimg}
          alt="Owner"
        />
      </div>
    </section>
  );
};

export default OwnerPOV;