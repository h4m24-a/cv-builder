import React from "react"
import { useState } from "react"
import Profile from "./components/Profile"
import CVPreview from "./components/CVPreview"
// import Education from "./components/Education"
// import Skills from "./components/Skills"
// import Experience from "./components/Experience"

function App() {

  // Profile
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const fullName = firstName + " " + lastName

  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")



  const [education, setEducation] = useState("")

  
  const [experience, setExperience] = useState("")
  
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
            
            
          </div>
        </div>




        {/* Right Page */}
        <div className=" flex-1 bg-white p-8">
          <div className=" p-4 rounded border border-black">
            <h2 className="text-2xl font-semibold"> CV Preview</h2>
            <CVPreview 
             fullName={fullName}
             email={email}
             number={number}
            />
          </div>
        </div>
      </div>
    </main>
  </>
  )
}

export default App
 