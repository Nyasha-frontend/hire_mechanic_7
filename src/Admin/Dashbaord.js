import React, { useState } from "react";
import styles from "./Dashboard.module.css";

const options = ["Get Hired", "Hire Mechanic", "Insurance Claim", "Get Franchise"];

const dummyData = {
  "Get Hired": [
    { name: "John Doe", phone: "1234567890", city: "Mumbai", service: "Engine Repair", experience: "3 years" },
    { name: "Jane Smith", phone: "9876543210", city: "Delhi", service: "AC Repair", experience: "2 years" },
  ],
  "Hire Mechanic": [
    { name: "Customer 1", need: "Brake Fix", city: "Pune", phone: "1112223333" },
    { name: "Customer 2", need: "Engine Tuning", city: "Nagpur", phone: "4445556666" },
  ],
  "Insurance Claim": [
    { name: "Amit", policyNo: "INS123", issue: "Accident", city: "Kolkata" },
    { name: "Sara", policyNo: "INS456", issue: "Theft", city: "Bangalore" },
  ],
  "Get Franchise": [
    { applicant: "Kiran", city: "Hyderabad", contact: "9998887777", location: "Commercial Area" },
    { applicant: "Deepa", city: "Jaipur", contact: "8887776666", location: "Mall Complex" },
  ]
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Get Hired");

  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.heading}>Admin Dashboard</h1>

      <div className={styles.cardContainer}>
        {options.map((option) => (
          <div
            key={option}
            className={`${styles.card} ${activeTab === option ? styles.active : ""}`}
            onClick={() => setActiveTab(option)}
          >
            {option}
          </div>
        ))}
      </div>

      <div className={styles.tableContainer}>
        <h2 className={styles.tableTitle}>{activeTab} Details</h2>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Sl No</th>
                {Object.keys(dummyData[activeTab][0]).map((key, index) => (
                  <th key={index}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dummyData[activeTab].map((entry, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  {Object.values(entry).map((value, i) => (
                    <td key={i}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
