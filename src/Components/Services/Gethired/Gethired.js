import React, { useState } from "react";
import styles from "../Gethired/Gethired.module.css";
import carrepairtwo from "../../../assets/carrepairtwo.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Gethired = () => {

const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    service: "",
    experience: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    toast.success("Form submitted successfully!");
    // Optionally reset form:
    // setFormData({ name: "", phone: "", city: "", service: "", experience: "", description: "" });
  };

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${carrepairtwo})` }}
    >
      <div className={styles.overlay}></div>
      <h2 className={styles.heading}>Get Hired</h2>

    
         <form className={styles.forms} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <select name="service" value={formData.service} onChange={handleChange} required>
          <option value="">Select Service Type</option>
          <option value="engine">Engine Repair</option>
          <option value="brakes">Brake Service</option>
          <option value="ac">AC Repair</option>
          <option value="general">General Service</option>
        </select>
        <input
          type="number"
          name="experience"
          placeholder="Experience (in years)"
          value={formData.experience}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Describe your expertise"
          rows="4"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>

      <ToastContainer position="bottom-right" autoClose={3000} theme="colored" />
      
      
    </div>
  )
}

export default Gethired;