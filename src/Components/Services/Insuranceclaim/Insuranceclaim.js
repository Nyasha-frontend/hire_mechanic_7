import React, { useState } from "react";
import styles from "../Insuranceclaim/Insuranceclaim.module.css";
import carrepairtwo from "../../../assets/carrepairtwo.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Insuranceclaim = () => {
  const [formData, setFormData] = useState({
    insuranceCompany: "",
    policyNumber: "",
    insuredName: "",
    insuredEmail: "",
    vehicleName: "",
    vehicleNumber: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
    accidentDate: "",
    accidentTime: "",
    accidentLocation: "",
    accidentReason: "",
    damagePart: "",
    driverName: "",
    driverLicense: "",
    peopleInVehicle: "",
    contactPersonName: "",
    contactPersonNumber: "",
    legalAction: "",
    legalDetails: "",
    personInjured: "",
    injuryDetails: "",
    carInWorkshop: "",
    workshopDetails: "",
    estimatePrepared: "",
    billAmount: "",
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
  };

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${carrepairtwo})` }}
    >
      <div className={styles.overlay}></div>
      <h2 className={styles.heading}>Insurance Claim</h2>

      <form className={`${styles.forms} ${styles.gridForm}`} onSubmit={handleSubmit}>
        <input type="text" name="insuranceCompany" placeholder="Insurance Company Name" value={formData.insuranceCompany} onChange={handleChange} required />
        <input type="text" name="policyNumber" placeholder="Policy Number" value={formData.policyNumber} onChange={handleChange} required />
        <input type="text" name="insuredName" placeholder="Insured Person Name" value={formData.insuredName} onChange={handleChange} />
        <input type="email" name="insuredEmail" placeholder="Insured Person Email-ID" value={formData.insuredEmail} onChange={handleChange} />
        <input type="text" name="vehicleName" placeholder="Vehicle Name" value={formData.vehicleName} onChange={handleChange} />
        <input type="text" name="vehicleNumber" placeholder="Vehicle Number" value={formData.vehicleNumber} onChange={handleChange} />
        <input type="text" name="area" placeholder="Area (Workshop Details)" value={formData.area} onChange={handleChange} />
        <input type="text" name="city" placeholder="City (Workshop Details)" value={formData.city} onChange={handleChange} />
        <input type="text" name="state" placeholder="State (Workshop Details)" value={formData.state} onChange={handleChange} />
        <input type="text" name="pincode" placeholder="Pincode (Workshop Details)" value={formData.pincode} onChange={handleChange} />
        <input type="date" name="accidentDate" placeholder="Accident Date" value={formData.accidentDate} onChange={handleChange} />
        <input type="time" name="accidentTime" placeholder="Accident Time" value={formData.accidentTime} onChange={handleChange} />
        <input type="text" name="accidentLocation" placeholder="Accident Location" value={formData.accidentLocation} onChange={handleChange} />
        <textarea name="accidentReason" placeholder="Reason of Accident/Theft" rows="2" value={formData.accidentReason} onChange={handleChange}></textarea>
        <input type="text" name="damagePart" placeholder="Damage Part" value={formData.damagePart} onChange={handleChange} />
        <input type="text" name="driverName" placeholder="Driver Name" value={formData.driverName} onChange={handleChange} />
        <input type="text" name="driverLicense" placeholder="Driver License Number" value={formData.driverLicense} onChange={handleChange} />
        <input type="number" name="peopleInVehicle" placeholder="How many People in Vehicle" value={formData.peopleInVehicle} onChange={handleChange} />
        <input type="text" name="contactPersonName" placeholder="Contact Person Name" value={formData.contactPersonName} onChange={handleChange} />
        <input type="tel" name="contactPersonNumber" placeholder="Contact Person Number" value={formData.contactPersonNumber} onChange={handleChange} />
        
        <select name="legalAction" value={formData.legalAction} onChange={handleChange}>
          <option value="">Any Legal Action (Police/FIR)</option>
          <option value="yes">YES</option>
          <option value="no">NO</option>
        </select>
        <textarea name="legalDetails" placeholder="Please mention the legal detail" rows="2" value={formData.legalDetails} onChange={handleChange}></textarea>

        <select name="personInjured" value={formData.personInjured} onChange={handleChange}>
          <option value="">Any person injured?</option>
          <option value="yes">YES</option>
          <option value="no">NO</option>
        </select>
        <textarea name="injuryDetails" placeholder="Please mention injury details" rows="2" value={formData.injuryDetails} onChange={handleChange}></textarea>
        
        
        <select name="carInWorkshop" value={formData.carInWorkshop} onChange={handleChange}>
          <option value="">Car in Workshop?</option>
          <option value="yes">YES</option>
          <option value="no">NO</option>
        </select>
        <textarea name="workshopDetails" placeholder="Please mention workshop detail" rows="2" value={formData.workshopDetails} onChange={handleChange}></textarea>

        <select name="estimatePrepared" value={formData.estimatePrepared} onChange={handleChange}>
          <option value="">Estimate Bill Prepared?</option>
          <option value="yes">YES</option>
          <option value="no">NO</option>
        </select>
        <input type="number" name="billAmount" placeholder="Please Mention Bill Amount (₹)" value={formData.billAmount} onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>

      <ToastContainer position="bottom-right" autoClose={3000} theme="colored" />
    </div>
  );
};

export default Insuranceclaim;
