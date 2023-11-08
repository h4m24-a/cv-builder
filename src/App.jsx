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

  // Education
  const [schoolName, setSchoolName] = useState("University of London");
  const [degree, setDegree] = useState("Computer Science");
  const [startDate, setStartDate] = useState("Sept. 2023");
  const [endDate, setEndDate] = useState("July 2025");

  const fullDate = startDate + " - " + endDate;

  // Experience
  const [company, setCompany] = useState("Web Agency");
  const [position, setPosition] = useState("Senior Software Developer");
  const [jobStart, setJobStart] = useState("Feb. 2022");
  const [jobEnd, setJobEnd] = useState("Sep. 2023");
  const [description, setDescription] = useState("");

  const fullJobDate = jobStart + " - " + jobEnd;

  return (
    <>
      <main>
        <h1 className=" bg-black text-white text-4xl font-bold font-mono text-center p-4">
          CV Builder
        </h1>

        <div className="h-screen sm: flex flex-col md:flex-row ">
          {/* Left Page */}
          <div id="editor" className=" flex-1 bg-white p-8">
            <div className=" p-4 rounded border border-black ">
              <Profile
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setlastName={setlastName}
                email={email}
                setEmail={setEmail}
                number={number}
                setNumber={setNumber}
              />

              <Education
                schoolName={schoolName}
                setSchoolName={setSchoolName}
                degree={degree}
                setDegree={setDegree}
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
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
                setDescription={setDescription}
              />
            </div>
          </div>

          {/* Right Page */}
          <div id="cvPreview" className=" flex-1 bg-white p-8">
            <div className=" p-4 rounded border border-black">
              <CVPreview
                fullName={fullName}
                email={email}
                number={number}
                schoolName={schoolName}
                degree={degree}
                fullDate={fullDate}
                position={position}
                company={company}
                description={description}
                fullJobDate={fullJobDate}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
