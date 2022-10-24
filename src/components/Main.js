import React, { useState } from "react";
import { personal, education, experience } from "./formInput";
import Resume from "./Resume";
import Input from "./Input";

function Main() {
    const [submit, setSubmit] = useState(false);
    const [personInfo, setPersonInfo] = useState({
        firstName: '', lastName: '', title: '',
        address: '', phone: '', email: '',
    })
    const [experienceInfo, setExperienceInfo] = useState({
        position: '', organization: '', city: '',
        startDate: '', endDate: '',
    })
    const [educationInfo, setEducationInfo] = useState({
        school: '', city: '', degree: '',
        course: '', startDate: '', endDate: '',
    })

    return (
        <section>
            <div className="head">
                <h3>cv app</h3>
            </div>
            <div className="container">
                <div className="cv-info">
                    <div className="cv-input">
                        <Input
                            title='Personal Details'
                            sectionInfo={personInfo}
                            setSectionInfo={setPersonInfo}
                            sectionInput={personal}
                        />
                        <Input
                            title='Experience'
                            sectionInfo={experienceInfo}
                            setSectionInfo={setExperienceInfo}
                            sectionInput={experience}
                        />
                        <Input
                            title='Education'
                            sectionInfo={educationInfo}
                            setSectionInfo={setEducationInfo}
                            sectionInput={education}
                        />

                    </div>
                    <button
                        className="btn"
                        onClick={() => setSubmit(!submit)}
                    >
                        generate
                    </button>
                </div>
                {submit &&
                    <Resume
                        personInfo={personInfo}
                        experienceInfo={experienceInfo}
                        educationInfo={educationInfo}

                    />
                }
            </div>
        </section>
    )
}

export default Main;