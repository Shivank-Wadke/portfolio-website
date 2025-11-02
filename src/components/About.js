import React from 'react';

function About() {
  return (
    <section className="section about-section">
      <h2>About Me</h2>

      <div className="about-layout">
        {/* Left Side — Text Content */}
        <div className="about-text">
          <p>
            Hi there! I'm <strong>Shivank Wadke</strong>, a passionate and
            curious developer currently pursuing my third year in Computer
            Science Engineering at Pimpri Chinchwad University. I enjoy
            exploring the intersection of <strong>AI, cloud computing</strong>,
            and <strong>web development</strong>.
          </p>

          <p>
            I love crafting modern, responsive web applications that focus on
            user experience and clean code. My goal is to combine creativity
            with technology to solve real-world problems and build impactful
            digital experiences.
          </p>

          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>React & Node.js</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML5 / CSS3 / Tailwind</li>
              <li>Python & Django</li>
              <li>MySQL & Firebase</li>
              <li>Azure & Cloud Technologies</li>
            </ul>
          </div>

          <div className="interests">
            <h3>Interests</h3>
            <p>
              When I'm not coding, I enjoy learning about emerging technologies,
              contributing to open-source projects, and exploring IoT-based
              systems. I also love music and photography — both fuel my
              creativity and attention to detail.
            </p>
          </div>
        </div>

        {/* Right Side — Profile Image */}
        <div className="about-image">
          <img src="profile.jpeg" alt="Profile" />
        </div>
      </div>
    </section>
  );
}

export default About;
