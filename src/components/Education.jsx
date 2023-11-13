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
      <h1 className="font-roboto text-xl font-extrabold bg-blue-300 rounded p-2 mt-2 text-center">
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

        </form>
      </div>
    </>
  );
};

export default Education;