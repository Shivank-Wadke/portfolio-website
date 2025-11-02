import React from "react";

function Experience() {
  return (
    <section className="section">
      <h2>Experience</h2>
      <div className="experience-item">
        <h3>Python Developer</h3>
        <p>
          <b>WaterApp Technologies Private Limited | May 2025 - July 2025</b>
        </p>
        <p>
          <ul>
            <li>
              Developed a Monthly Report Generation feature to visualize key
              metrics using bar and pie charts, providing clients with effective
              insights and analytics.
            </li>
            <li>
              Designed and implemented backend workflows using Python, Firebase
              to store and fetch data, and deployed via Firebase Cloud
              Functions.
            </li>
            <li>
              Utilized SQLite for efficient data handling, structured storage,
              and reducing API calls.
            </li>
            <li>
              Worked with Python libraries like Pandas, NumPy, and Matplotlib to
              process and visualize data.
            </li>
            <li>
              Designed a Protocol Buffer (Protobuf) schema to streamline data
              exchange and support smooth integration with the frontend UI.
            </li>
            <li>
              Reduced cloud API calls by 60%, optimizing backend communication
              and significantly lowering operational costs.
            </li>
          </ul>
        </p>
      </div>
    </section>
  );
}

export default Experience;
