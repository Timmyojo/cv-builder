import React from "react";
import "./resume.scss";

const Resume = ({ personInfo, educationInfo, experienceInfo}) => {
    return (
        <div className="resume">
            <div className="bio">
                <h2>{`${personInfo.firstName} ${personInfo.lastName}`}</h2>
                <p className="job-title">{personInfo.title}</p>
                <div className="contact">
                    <p>{ personInfo.email}</p>
                    <p>{ personInfo.phone}</p>
                </div>
            </div>
            <div className="experience">
                <h2>experience</h2>
                <hr></hr>
                <div className="company-city">
                    <p>{experienceInfo.organization}</p>
                    <p>{ experienceInfo.city}</p>
                </div>
                <div className="position-dates">
                    <p>{ experienceInfo.position}</p>
                    <p>{`${experienceInfo.startDate} - ${experienceInfo.endDate}`}</p>
                </div>
            </div>
            <div className="education">
                <h2>education</h2>
                <hr></hr>
                <div className="school-city">
                    <p>{educationInfo.school}</p>
                    <p>{ educationInfo.city}</p>
                </div>
                <div className="degree-dates">
                    <p>{ educationInfo.degree}</p>
                    <p>{`${educationInfo.startDate} - ${educationInfo.endDate}`}</p>
                </div>
            </div>

        </div>
    )
}

export default Resume