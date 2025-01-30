import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
    <div className="about__box">
        <i className="bx bx-award"></i>
        <h3 className="about__title">Status</h3>
        <span className="about__subtitle">Student</span>
    </div>

    <div className="about__box">
        <i className="bx bx-briefcase-alt about_icon"></i>
        <h3 className="about__title">Domain</h3>
        <span className="about__subtitle">Machine Learning</span>
    </div>

    {/* <div className="about__box">
        <h3 className="about__title"></h3>
        <span className="about__subtitle"></span>
    </div> */}
    

    
    </div>
  )
}

export default Info
