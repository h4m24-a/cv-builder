import React from "react";
import { useState } from "react";
import Profile from "./components/Profile";
import CVPreview from "./components/CVPreview";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  // Profile
  const [firstName, setFirstName] = useState("John");
  const [lastName, setlastName] = useState("Doe");
  const fullName = firstName + " " + lastName;
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [number, setNumber] = useState("0123456789");
  const [link, setLink] = useState("portfolio.com")
  const [summary, setSummary] = useState("Seasoned senior developer with 5 years experience in full-stack web development. Proficient in JavaScript (Node.js, React, Vue.js), Python (Django), and PHP (Laravel). Strong database skills with MySQL and MongoDB. Expertise in Git and deploying on AWS. Proven track record leading teams to deliver high-quality solutions on time")

  // Education
  const [education, setEducation] = useState([ 
    {
      id:1,
      schoolName: "University of London",
      degree: "BSc Computer Science",
      startDate: "Sept. 2010",
      endDate: "July 2013",
    },
    {
      id:2,
      schoolName: "University of London",
      degree: "MSc Computer Science",
      startDate: "Sept. 2013",
      endDate: "July 2014",
    }

  ])


  // Experience
  const [company, setCompany] = useState("Web Agency");
  const [position, setPosition] = useState("Junior Software Developer");
  const [jobStart, setJobStart] = useState("Feb. 2023");
  const [jobEnd, setJobEnd] = useState("Present");
  const [description, setDescriptions] = useState([
    "Led a team of five developers, implementing agile methodologies and ensuring on-time project delivery.",
    "Worked closely with product management and UX/UI teams to integrate frontend and backend components seamlessly.",
    "Provided mentorship to junior developers, fostering a culture of continuous learning and improvement."
  ]);



  return (
    <>
      <main>
        <h1 className=" bg-black text-white text-4xl font-bold font-mono text-center p-3">
          CV Builder
        </h1>

        <div className="h-screen sm: flex flex-col lg:flex-row ">
          {/* Left Page */}
          <div id="editor" className=" flex-1 bg-white p-8">
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

              <Education
              education={education}
              setEducation={setEducation}
              />

              <Experience
                company={company}
                setCompany={setCompany}
                position={position}
                setPosition={setPosition}
                jobStart={jobStart}
                setJobStart={setJobStart}
                jobEnd={jobEnd}
                setJobEnd={setJobEnd}
                description={description}
                setDescriptions={setDescriptions}
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
                summary={summary}
                educationData={education} 
                position={position}
                company={company}
                description={description}
                link={link}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
