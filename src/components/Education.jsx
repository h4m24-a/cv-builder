/* eslint-disable react/prop-types */
import React from "react";

import InputField from "./InputField";

const Education = ({education, setEducation}) => {
  const addForm = () => {
    setEducation((prevState) => [
      ...prevState,
      {id:prevState.length + 1, schoolName:"", degree:"", startDate:"", endDate:""}
    ]);
  };


const handleInputValue = (index, field, value) => {
    setEducation((prevState) => {
      const updatedState = [...prevState];
      updatedState[index][field] = value;
      return updatedState;
    });
  };

  return (
    <>
      <h1 className="font-roboto text-xl font-extrabold bg-sky-200 rounded p-2 mt-5 text-center">
        Education
      </h1>

      <div className="flex justify-center">
        <form className="flex flex-wrap justify-center">

        {education.map((educations, index) => (
        <div key={index} className="flex flex-wrap justify-center lg:flex ">
          <InputField
            label="School Name"
            id={`schoolName-${educations.id}`}
            value={educations.schoolName}
            onChange={(e) => handleInputValue(index, "schoolName", e.target.value)}
            type="text"
          />

          <InputField
            label="Degree"
            id={`degree-${educations.id}`}
            value={educations.degree}
            onChange={(e) => handleInputValue(index, "degree", e.target.value)}
            type="text"
          />

          <div className="md:flex w-full justify-center">
            <InputField
              label="Start Date"
              id={`startDate-${educations.id}`}
              value={educations.startDate}
              onChange={(e) => handleInputValue(index, "startDate", e.target.value)}
              type="text"
              placeholder="September 2023"
            />

            <InputField
              label="End Date"
              id={`endDate-${educations.id}`}
              value={educations.endDate}
              onChange={(e) => handleInputValue(index, "endDate", e.target.value)}
              type="text"
              placeholder="July 2025"
            />
          </div>
        </div>
      ))}
         

          <div onClick={addForm} className="flex items-center justify-center w-10 h-10 text-white transition-colors mt-3 duration-150 bg-red-500 rounded-full focus:shadow-outline hover:bg-red-700">
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