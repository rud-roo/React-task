// param = {
//   name: "Rudro",
//   age: 23,
//   email: "saharudro15@gmail.com",
//   skills: ["JavaScript", "React", "Django"],
//   interests: ["Cricket", "Chess", "Travel"],
//   socialLinks: [
//     {mediaName: "Fb", mediaAddress: "https://www.facebook.com/rudro.saha.332/"},
//     {mediaName: "Github", mediaAddress: "https://github.com/rud-roo"},
//   ],
// }

// BioData(param);

const BioData = (props) => {
  // console.log("props:", props);
  const {name, age, email, skills, interests, socialLinks} = props;
    return (
      <div className="bio-data">
        <div className="personal-info">
          <h2>Bio Data of {name}</h2>
          <p>Age: {age}</p>
          <p>Email: {email}</p>
        </div>
        <div className="skills">
          <h2>My Skills</h2>
          <ul>
            {skills.map((skill)=>(
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="interests">
          <h2>My Interests</h2>
          <ul>
            {interests.map((interest)=>(
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </div>
        <div className="social-media">
          <h2>My Social Media</h2>
          {socialLinks.map((socialLink)=>(
            <p key={socialLink.mediaName}>
              <strong>{socialLink.mediaName}: </strong>{socialLink.mediaAddress}
            </p>
          ))}
        </div>
        <hr />
      </div>
    )
}

export default BioData;