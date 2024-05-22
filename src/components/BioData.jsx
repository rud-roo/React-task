const BioData = (props) => {
    console.log("props: ", props)
    const {name, age, email, skills, interests, socialLinks} = props
    return (
        <div className="bio-data">
            <div className="personal-info">
                <h2>Bio Data of {name}</h2>
                <p><strong>Age: </strong>{age}</p>
                <p><strong>Email: </strong>{email}</p>
            </div>
            <div className="skills">
                <h2>My Skills</h2>
                <ul>
                    {skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
            </div>
            <div className="interests">
                <h2>My interests</h2>
                <ul>
                    {interests.map((interest) => (
                        <li key={interest}>{interest}</li>
                    ))}
                </ul>
            </div>
            <div className="social-links">
                <h2>My Social Media</h2>
                {socialLinks.map((socialLink) => (
                    <p><strong>{socialLink.mediaName} {": "}</strong>{socialLink.mediaAddress}</p>
                ))}
            </div>
            <hr />
        </div>
    )
}

export default BioData