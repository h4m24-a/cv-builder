import React from "react";
import Profile from "./Profile";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";

const HomePage = () => {
  return (
    <>
      <h1 className=" text-4xl font-bold font-mono text-center p-4">CV Builder</h1>

      <div className="flex h-screen">
        {/* Left Page */}
        <div className=" flex-1 bg-white p-8">
          <div className=" p-4 rounded border border-black ">
            <h2 className="text-2xl font-semibold">Page 1</h2>
                <Profile />
            
          </div>
        </div>

        {/* Right Page */}
        <div className=" flex-1 bg-white p-8">
            <div className=" p-4 rounded border border-black">
                <h2 className="text-2xl font-semibold"> Page 2</h2>
                {/* Content here */}
            </div>
        </div>

      </div>
    </>
  );
};

export default HomePage;
