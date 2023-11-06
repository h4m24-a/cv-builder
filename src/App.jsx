import React from "react"
import { useState } from "react"
import Profile from "./components/Profile"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Experience from "./components/Experience"

function App() {
  
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
            <Profile />
            <Education />
            <Skills />
            <Experience />
          </div>
        </div>




        {/* Right Page */}
        <div className=" flex-1 bg-white p-8">
          <div className=" p-4 rounded border border-black">
            <h2 className="text-2xl font-semibold"> CV Preview</h2>
            
          </div>
        </div>
      </div>
    </main>
  </>
  )
}

export default App
 