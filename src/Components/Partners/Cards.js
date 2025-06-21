import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../Partners/Cards.module.css";
import partners from "../../assets/partners.jpg";
import { useNavigate } from "react-router-dom";

const Cards = ({id, title, description, image, link }) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleKnowMore = () => {
    navigate(link);
    // window.open("/know-more", "_blank"); // Will open in new tab
    // Alternative: use navigate if using React Router
    // navigate('/know-more');
  };

  // Animation variants
  const cardVariants = {
    offscreen: {
      y: 100,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#f69d07", // Your gradient color
      transition: { duration: 0.3 }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.div
      className={styles.card}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
    >
      <div className={styles.cardImageContainer}>
        <img src={image} alt={title} className={styles.cardImage} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={`${styles.cardDescription} ${isExpanded ? styles.expanded : ""}`}>
          {description}
        </p>
        
        <div className={styles.buttonContainer}>
          <motion.button
            className={styles.knowMoreButton}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={handleKnowMore}
          >
            Know More
          </motion.button>
          
          {description.length > 100 && (
            <button className={styles.readMoreButton} onClick={toggleExpand}>
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Cards;