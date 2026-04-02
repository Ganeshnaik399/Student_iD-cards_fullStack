import React from "react";
import { useLocation } from "react-router-dom";
function Profile() {
  const { state: student } = useLocation();

  if (!student) return <h2 className="no-data">No Profile Data</h2>;

  return (
    <div className="profile-container">
      <div className="profile-card">

        {/* Cover */}
        <div className="cover"></div>

        {/* Profile Header */}
        <div className="profile-header">
          <img src={student.img} alt="profile" className="profile-img" />
          <h2>{student.name}</h2>
          <p>Roll No: {student.rollno}</p>
          <p>Class: {student.class}</p>
        </div>

        {/* Content */}
        <div className="profile-content">

          <div className="section">
            <h3>About</h3>
            <p>
              Passionate student interested in web development, machine learning,
              and building real-world applications.
            </p>
          </div>

          <div className="section">
            <h3>Contact</h3>
            <p>Email: {student.email || "student@email.com"}</p>
            <p>Phone: {student.phone || "+91 9876543210"}</p>
            <p>Location: {student.location || "India"}</p>
          </div>

          <div className="section">
            <h3>Skills</h3>
            <div className="skills">
              {["Leadership", "Communication", "Problem Solving", "React", "Python"].map(
                (skill, i) => (
                  <span key={i}>{skill}</span>
                )
              )}
            </div>
          </div>

          <div className="section">
            <h3>Social</h3>
            <p className="link">LinkedIn</p>
            <p className="link">GitHub</p>
            <p className="link">Portfolio</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Profile;