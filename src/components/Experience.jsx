/* eslint-disable react/prop-types */
// Experience.jsx
import React from 'react';
import { useState } from 'react';
import InputField from './InputField';

const Experience = ({ experience, setExperience }) => {
  const addForm = () => {
    setExperience((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        company: '',
        position: '',
        jobStart: '',
        jobEnd: '',
        descriptions: [],
      },
    ]);
  };

  const handleInputValue = (index, field, value) => {
    setExperience((prevState) => [
      ...prevState.slice(0, index),
      { ...prevState[index], [field]: value },
      ...prevState.slice(index + 1),
    ]);
  };

  const [description, setDescription] = useState('');

  const handleNewDesc = () => {
    if (description.trim() !== '') {
      setExperience((prevState) => [
        ...prevState.slice(0, prevState.length - 1),
        {
          ...prevState[prevState.length - 1],
          descriptions: [...prevState[prevState.length - 1].descriptions, description],
        },
      ]);
      setDescription('');
    }
  };
  
  

  return (
    <>
      <h1 className="font-roboto text-xl font-extrabold bg-yellow-200 rounded p-2 mt-6 text-center">
        Experience
      </h1>

      <div className="flex justify-center">
        <form className="flex flex-wrap justify-center">
          {experience.map((experiences, index) => (
            <div key={index} className="flex flex-wrap justify-center lg:flex">
              <InputField
                label="Company"
                id={`company-${experiences.id}`}
                value={experiences.company}
                onChange={(e) => handleInputValue(index, 'company', e.target.value)}
              />

              <InputField
                label="Position"
                id={`position-${experiences.id}`}
                value={experiences.position}
                onChange={(e) => handleInputValue(index, 'position', e.target.value)}
                type="text"
              />

              <InputField
                label="Start Date"
                id={`jobStart-${experiences.id}`}
                value={experiences.jobStart}
                onChange={(e) => handleInputValue(index, 'jobStart', e.target.value)}
                type="text"
                placeholder="Feb. 2022"
              />

              <InputField
                label="End Date"
                id={`jobEnd-${experiences.id}`}
                value={experiences.jobEnd}
                onChange={(e) => handleInputValue(index, 'jobEnd', e.target.value)}
                type="text"
                placeholder="May 2023"
              />

              <div className="w-full px-4 flex flex-col justify-center">
                <label
                  htmlFor={`description-${experiences.id}`}
                  className="flex justify-center pt-3 text-md font-medium leading-6 text-gray-900"
                >
                  Description
                </label>

                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  id={`description-${experiences.id}`}
                  value={description}
                  name="description"
                  placeholder="Enter description"
                  className="mx-ai rounded-md border-0 py-2 pl-7 pr-28 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-32"
                />
              </div>

              <div className="flex flex-col items-center justify-center pt-3 pb-3">
                <button
                  type="button"
                  onClick={handleNewDesc}
                  className="flex rounded border border-indigo-600 bg-indigo-600 px-4 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                >
                  Add Description
                </button>
              </div>
            </div>
          ))}

          <div
            onClick={addForm}
            className="flex items-center justify-center w-10 h-10 text-white transition-colors mt-8 mb-4 duration-150 bg-red-500 rounded-full focus:shadow-outline hover:bg-red-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </div>
        </form>
      </div>
    </>
  );
};

export default Experience;
