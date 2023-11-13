import React from 'react'
import { useState } from 'react';
import InputField from './InputField';

// eslint-disable-next-line react/prop-types
const Experience = ({ setCompany, company, setPosition, position, setJobStart, jobStart, setJobEnd, jobEnd,  setDescriptions}) => {


  const handleSumbit = (e) => {
    e.preventDefault();
  };

  const [description, setDescription] = useState([]);
  

  const handleNewDesc = () => {
    if (description.trim() !== "") {
      setDescriptions((prevDescriptions) => [...prevDescriptions, description]);
      setDescription("");
    }
  };

  

  return (
    <>
      <h1 className="font-roboto text-xl font-extrabold border border-sky-700 rounded p-2 mt-4 mx-2 text-center">
      Experience
      </h1>

      <div className="flex justify-center">
        <form onSubmit={handleSumbit} className="flex flex-wrap justify-center">
          <InputField
            label="Company"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />

        <InputField
            label="Company"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            type="text"
          />

          <InputField
            label="Position"
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            type="text"
          />

          <InputField
            label="Start Date"
            id="jobStart"
            value={jobStart}
            onChange={(e) => setJobStart(e.target.value)}
            type="text"
            placeholder="Feb. 2022"
          />

          <InputField
            label="End Date"
            id="jobEnd"
            value={jobEnd}
            onChange={(e) => setJobEnd(e.target.value)}
            type="text"
            placeholder="May 2023"
          />


          <div className="w-full px-4 flex flex-col justify-center">
            <label htmlFor="description" className="flex justify-center pt-3 text-md font-medium leading-6 text-gray-900">Description</label>

            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              name="description"
              id="description"
              placeholder="Enter description"
              className=" mx-ai rounded-md border-0 py-2 pl-7 pr-28 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-32"/>
          </div>

          <div className="flex justify-center pt-3 pb-3">
            <button
              type="button"
              onClick={handleNewDesc}
              className="flex  rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
            >
              Add Description
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Experience