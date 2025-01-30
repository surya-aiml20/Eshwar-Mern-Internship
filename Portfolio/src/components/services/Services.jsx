import React, { useState } from 'react'
import "./services.css"
const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index)
    };
  return (
   <section className="services section" id="services">
    <h2 className="section__title">Experiences</h2>
    <span className='section__subtitle'>My industrial journey</span>

    <div className="services__container container grid">
        <div className="services__content">
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
                Data Scientist <br/> Intern
            </h3>

        </div>
        <span className="services__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

        <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                <h3 className="services__modal-title">Data Scientist Intern</h3>
                <p className="services__modal-description">Interned at Moksa.Ai for a Data Scientist role </p>

                <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                        Assisted in the data annotation process for video datasets.
                        </p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                        Labeled and annotated videos to create ground truth labels for training machine learning models.
                        </p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                        Collaborated with seniors and mentors to develop annotation guidelines and protocols.
                        </p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                        Ensured consistent and reliable labeling across datasets for machine learning tasks.
                        </p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                        Gained insights into the importance of high-quality labeled data in training robust models for video analysis.
                        </p>
                    </li>
                </ul>
            </div>
        </div>

    </div>
   </section>
  )
}

export default Services
