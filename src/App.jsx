import React from "react"
import { useState } from "react"
import Profile from "./components/Profile"
import CVPreview from "./components/CVPreview"
import Education from "./components/Education"
// import Experience from "./components/Experience"

function App() {

  // Profile
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const fullName = firstName + " " + lastName

  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")


  // Education
  const [schoolName, setSchoolName] = useState("")
  const [degree, setDegree] = useState("")
  const [startdate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  
  // Experience
  


  return (
    <>
    <main>
      <h1 className=" bg-black text-white text-4xl font-bold font-mono text-center p-4">
        CV Builder
      </h1>

      <div className="h-screen sm: flex flex-col md:flex-row ">

        {/* Left Page */}
        <div className=" flex-1 bg-white p-8">
          <div className=" p-4 rounded border border-black ">
            <Profile 
            firstName={firstName}
            setFirstName={setFirstName}

            lastName={lastName}
            setLastName={setLastName}

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

            startdate={startdate}
            setStartDate={setStartDate}

            endDate={endDate}
            setEndDate={setEndDate}
            />
            
          </div>
        </div>




        {/* Right Page */}
        <div className=" flex-1 bg-white p-8">
          <div className=" p-4 rounded border border-black">
            <CVPreview 
             fullName={fullName}
             email={email}
             number={number}

             schoolName={schoolName}
             degree={degree}
             startDate={startdate}
             endDate={endDate}
            />
          </div>
        </div>
      </div>
    </main>
  </>
  )
}

export default App
 