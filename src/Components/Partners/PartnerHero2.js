import React from 'react';
import Card from "./Cards"
import dolphincarlogosquare from "../../assets/dolphincarlogosquare.png";
import carrepairtwo from "../../assets/carrepairtwo.jpg";
import styles from './PartnerHero2.module.css'; // Assuming you have a CSS module

const services = [
  {
    
    title: "Dolphin Car Spa",
    description: " Comprehensive Car Care Services",
    
    image: dolphincarlogosquare,
    
  },
  {
    title: "SS Automobiles",
    description: "Try our Cleaning & Shine package that is very pocket-friendly.",
    image: carrepairtwo,
  },
  
];

const PartnerHero2 = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}><span>P</span><span>A</span><span>R</span><span>T</span><span>N</span><span>E</span><span>R</span><span>S</span></h2>
      <p className={styles.subheading}>"The backbone of a legendary company isn’t in its profits—it’s in its persistence."</p>
      <div className={styles.underline}></div>
      <div className={styles.cardContainer}>
        {services.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
};

export default PartnerHero2;