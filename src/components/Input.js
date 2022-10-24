import React from "react";


function Input({ sectionInfo, setSectionInfo, title, sectionInput }) {
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setSectionInfo({ ...sectionInfo, [name]: value })
    }

    return (
        <section className="personal">
            <form className="personal-form">
                <h2>{ title}</h2>
                {sectionInput.map((item) => {
                    const name = item.name
                    return (
                        <div className="form-control" key={item.id}>
                            <input
                                type={item.type}
                                name={name}
                                placeholder={item.placeHolder}
                                value={sectionInfo.name}
                                onChange={handleChange}
                            />
                        </div>
                    )
                })}
                
            </form>
        </section>
    )
}

export default Input;