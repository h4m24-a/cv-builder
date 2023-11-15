import React from "react";
import { useState } from "react";
import Profile from "./components/Profile";
import CVPreview from "./components/CVPreview";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

function App() {
  // Profile
  const [firstName, setFirstName] = useState("John");
  const [lastName, setlastName] = useState("Doe");
  const fullName = firstName + " " + lastName;
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [number, setNumber] = useState("0123456789");
  const [link, setLink] = useState("portfolio.com");
  const [summary, setSummary] = useState(
    "Seasoned senior developer with 5 years experience in full-stack web development. Proficient in JavaScript (Node.js, React, Vue.js), Python (Django), and PHP (Laravel). Strong database skills with MySQL and MongoDB. Expertise in Git and deploying on AWS. Proven track record leading teams to deliver high-quality solutions on time"
  );

  // Education
  const [education, setEducation] = useState([
    {
      id: 1,
      schoolName: "University of London",
      degree: "BSc Computer Science",
      startDate: "Sept. 2010",
      endDate: "July 2013",
    },
    {
      id: 2,
      schoolName: "University of London",
      degree: "MSc Computer Science",
      startDate: "Sept. 2013",
      endDate: "July 2014",
    },
  ]);

  // Experience
  const [experience, setExperience] = useState([
    {
      id: 1,
      company: "Web Agency",
      position: "Junior Software Developer",
      jobStart: "Sept. 2014",
      jobEnd: "June 2017",
      descriptions: [
        "Work with senior developers to implement and maintain client-side and server-side code.",
        "Troubleshoot and debug issues in existing code and contribute to finding effective solutions.",
        "Write clean, well-documented code in languages such as HTML, CSS and JavaScript",
        "Participate in code reviews to improve coding skills and understanding of project requirements.",
      ],
    },
    {
      id: 2,
      company: "HFT",
      position: "Software Developer",
      jobStart: "July 2017",
      jobEnd: "Present",
      descriptions: [
        "Drive innovation through research, proposing new algorithms, and staying abreast of cutting-edge technologies.",
        "Collaborate with cross-functional teams, including traders and risk management, to align technology with business objectives.",
        "Lead and manage projects, ensuring timely delivery and effective communication between technical and non-technical stakeholders",
      ],
    },
  ]);

  const [description, setDescriptions] = useState([]);

  // Technical Skills
  const [skill, setSkill] = useState([
    {
      id: 1,
      techSkill: "React",
    },
    {
      id: 2,
      techSkill: "Tailwind CSS",
    },
    {
      id: 3,
      techSkill: "JavaScript",
    },
  ]);

  return (
    <>
      <main>
        <h1 className=" bg-black text-white text-4xl font-bold font-mono text-center p-3">
          CV Builder
        </h1>

        <div className="h-screen sm: flex flex-col lg:flex-row ">
          {/* Left Page */}
          <div id="editor" className=" flex-1 bg-white p-8 text-sm">
            <div className="shadow-2xl  rounded-md border border-black ">
              <Profile
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setlastName={setlastName}
                email={email}
                setEmail={setEmail}
                number={number}
                setNumber={setNumber}
                link={link}
                setLink={setLink}
                summary={summary}
                setSummary={setSummary}
              />

              <Education education={education} setEducation={setEducation} />

              <Skills skill={skill} setSkill={setSkill} />

              <Experience
                experience={experience}
                setExperience={setExperience}
                setDescriptions={setDescriptions}
                description={description}
              />
            </div>
          </div>

          {/* Right Page */}
          <div id="cvPreview" className=" flex-1  bg-white p-8">
            <div className="shadow-2xl p-4 rounded-md border border-black">
              <CVPreview
                fullName={fullName}
                email={email}
                number={number}
                link={link}
                summary={summary}
                educationData={education}
                experienceData={experience}
                setExperience={setExperience}
                setDescriptions={setDescriptions}
                description={description}
                skillData={skill}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
