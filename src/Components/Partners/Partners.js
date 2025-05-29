import React from "react";
import styles from "../Partners/Partners.module.css";

import dolphincarlogo from "../../assets/dolphincarlogo.png";
import PartnerHero1 from "./PartnerHero1";
import PartnerHero2 from "./PartnerHero2";


const Partners = () => {
  return (
    <>
      <PartnerHero1/>
      <PartnerHero2/>
      
{/*  */}
      {/* <div className={styles.contentBox}>
        <h1>Partners</h1>
          
        <h3>Partner 1: Dolphin Car Spa</h3>
        <p>
         
          ensuring your vehicle looks as good as new. Our partnership guarantees
          seamless care for both mechanical and aesthetic needs." From deep
          interior shampooing to exterior ceramic coating, Dolphin Car Spa uses
          high-quality products to restore your car’s shine and protect its
          finish. Their "Cleaning & Shine" package is designed to be affordable
          yet luxurious, leaving your vehicle looking showroom-ready.
        </p>
        <br />
        <h4 className={styles.dolphin}> Dolphin Car Spa – Key Highlights</h4>
        <br />
        <p>
          ✅ Comprehensive Car Care Services: From basic washing to deep
          interior cleaning, polishing, and detailing.
          <br />
          🛠️ Expert Technicians: Trained professionals with hands-on experience
          in car maintenance and care.
          <br />
          💧 Eco-Friendly Products: Uses high-quality, biodegradable cleaning
          materials that are safe for your vehicle and the environment.
          <br />
          🕒 Timely & Reliable Service: Committed to delivering services on time
          with utmost care and precision.
          <br />
          📍 Doorstep Pickup & Drop: Hassle-free pickup and drop facility
          available for your convenience.
          <br />
          🧼 Steam Wash Technology: Advanced steam cleaning ensures deep
          sanitization without harming vehicle parts.
          <br />
          🪑 Interior & Upholstery Detailing: Professional vacuuming, leather
          conditioning, and fabric treatment services.
          <br />
          🔧 Periodic Maintenance Packages: Affordable packages for regular
          servicing and long-term care.
          <br />
          📲 Online Booking System: Easy service booking through website or
          mobile app.
          <br />
          🌟 Customer Satisfaction Guaranteed: Hundreds of satisfied customers
          with excellent feedback and ratings.
          <br />
        </p>
        <img src={dolphincarlogo} alt="dolphincarlogo" />h

        <h3>Partner 2: SS Automobiles</h3>
        <p>
          "Dolphin Car Spa provides premium car cleaning and detailing services,
          ensuring your vehicle looks as good as new. Our partnership guarantees
          seamless care for both mechanical and aesthetic needs."
        </p>
        
      </div> */}
    </>
  );
};

export default Partners;
