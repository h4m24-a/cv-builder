/* eslint-disable react/prop-types */
import React from "react";

import InputField from "./InputField"; // Adjust the import path based on your file structure

const Education = ({
  setSchoolName,
  schoolName,
  setDegree,
  degree,
  setStartDate,
  startDate,
  setEndDate,
  endDate,
}) => {
  const handleSumbit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1 className="font-roboto text-xl font-extrabold border border-sky-700 rounded p-2 mt-2 mx-2 text-center">
        Education
      </h1>

      <div className="flex justify-center">
        <form onSubmit={handleSumbit} className="flex flex-wrap justify-center">
          <InputField
            label="School Name"
            id="schoolName"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
            type="text"
          />

          <InputField
            label="Degree"
            id="degree"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            type="text"
          />


          <div className="md:flex w-full justify-center">
          <InputField
            label="Start Date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            type="text"
            placeholder="September 2023"
          />

          <InputField
            label="End Date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            type="text"
            placeholder="July 2025"
          />
          </div>

          <div className="flex items-center justify-center w-10 h-10 text-white transition-colors mt-3 duration-150 bg-red-500 rounded-full focus:shadow-outline hover:bg-red-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>

          </div>

        </form>
      </div>
    </>
  );
};

export default Education;