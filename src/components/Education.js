import React from 'react';

function Education() {
  return (
    <section className="section">
      <h2>Education</h2>
      <table className="education-table">
        <thead>
          <tr>
            <th>Education Level</th>
            <th>Institution</th>
            <th>Year of Passing</th>
            <th>Marks/Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Higher Secondary</td>
            <td>Podar International School</td>
            <td>2021</td>
            <td>87%</td>
          </tr>
          <tr>
            <td>Senior Secondary</td>
            <td>Mount Saint Ann High School</td>
            <td>2023</td>
            <td>83%</td>
          </tr>
          <tr>
            <td>University</td>
            <td>Pimpri Chinchwad University</td>
            <td>2027</td>
            <td>CGPA 9.22</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Education;