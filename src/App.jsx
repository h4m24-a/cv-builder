/* eslint-disable react/no-unknown-property */
import React from "react";
import { useState } from "react";
import Profile from "./components/Profile";
import CVPreview from "./components/CVPreview";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";


function App() {


  const [viewPreview, setViewPreview] = useState(false);
  
  // Profile
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
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
    // {
    //   id: 2,
    //   company: "HFT",
    //   position: "Software Developer",
    //   jobStart: "July 2017",
    //   jobEnd: "Present",
    //   descriptions: [
    //     "Drive innovation through research, proposing new algorithms, and staying abreast of cutting-edge technologies.",
    //     "Collaborate with cross-functional teams, including traders and risk management, to align technology with business objectives.",
    //     "Lead and manage projects, ensuring timely delivery and effective communication between technical and non-technical stakeholders",
    //   ],
    // },
  ]);

  const [description, setDescriptions] = useState([
    
  ]);

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
      techSkill: "Node",
    },
    {
      id: 4,
      techSkill: "Python",
    },
    {
      id: 5,
      techSkill: "Django",
    },
    {
      id: 6,
      techSkill: "PHP",
    },
    {
      id: 7,
      techSkill: "Laravel",
    },
  ]);

  
const clearForm = () => {
  setFirstName('');
  setLastName('');
  setEmail('');
  setNumber('');
  setLink('');
  setSummary('');

    
setEducation([
  {
    id: 1,
    schoolName: '',
    degree: '',
    startDate: '',
    endDate: '',
  },
]);


setExperience([
  {
    id: 1,
    company: '',
    position: '',
    jobStart: '',
    jobEnd: '',
    descriptions: [],
  },
]);


setSkill([
  {
    id: 1,
    techSkill: '',
  }
 
]);



};


  return (
    <>
      <main>
        <h1 className=" bg-black text-white text-4xl font-bold font-mono text-center p-3">
          CV Builder
        </h1>


        <div className="flex justify-center gap-4 mt-1">
            <button type="button" onClick={clearForm} className="inline-flex items-center justify-center h-12 gap-2 px-6 text-md font-medium tracking-wide text-slate-700 transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
              <span>Clear Form</span>
              <span className="relative only:-mx-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
              </svg>
              </span>
            </button>
            <button
              type="button"
              onClick={() => setViewPreview(!viewPreview)}
              className="inline-flex items-center justify-center h-12 gap-2 px-6 text-md font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
            >
              {viewPreview ? 'Edit' : 'Preview'}
            </button>
        </div>
        

        <div className="h-screen sm: flex flex-col lg:flex-row ">
          {/* Left Page */}
          {viewPreview ? null : (
          <div id="editor" className=" flex-1 bg-white p-8 text-sm">
            <div className="shadow-2xl  rounded-md border border-black ">
              <Profile
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
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

              <Skills 
                skill={skill} 
                setSkill={setSkill} 
              />

              <Experience
                experience={experience}
                setExperience={setExperience}
                setDescriptions={setDescriptions}
                description={description}
              />
            </div>
          </div>
          )}

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
