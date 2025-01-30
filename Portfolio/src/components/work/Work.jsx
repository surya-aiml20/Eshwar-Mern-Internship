import React from "react";
import "./work.css";
import facerc from "../../assets/facerc.jpg";
import railmadad from "../../assets/RAILMADAD.jpg";
import blog from "../../assets/19197307.jpg";

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Intelligent Face Recognition and Attendance System with Liveness Detection",
      description: "Developed an Intelligent Face Recognition and Attendance System with Liveness Detection to automate attendance tracking. Utilizing computer vision, deep learning, and liveness detection, the system ensures efficient, secure identification while preventing spoofing attempts, providing reliable attendance recording.",
      image: facerc, 
    },
    {
      id: 2,
      title: "AI-Enhanced Complaint Management System for Rail Madad",
      description: "Developed an AI-driven model for an enhanced complaint management system for Indian Railways, utilizing Convolutional Neural Networks (CNNs) for real-time multimedia analysis and Natural Language Processing (NLP) for sentiment analysis. The model automates the categorization and prioritization of passenger complaints, significantly improving operational efficiency and response times.",
      image: railmadad,
    },
    {
      id: 3,
      title: "Blog Website ",
      description: "Built a dynamic and responsive blog platform using React, Node.js, Express.js, and MongoDB. Features include user authentication, post management, rich text editing, and real-time interactions for a seamless reading and writing experience.",
      image: blog,
    }
  ];

  return (
    <section id="projects" className="work-section">
      <h2 className="section-title">My Projects</h2>
      <p className="section-subtitle">What I have created</p>

      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-content">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-text">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;