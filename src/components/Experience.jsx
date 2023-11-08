import React from 'react'
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Experience = ({ setCompany, company, setPosition, position, setJobStart, jobStart, setJobEnd, jobEnd, setDescription, description  }) => {


  const handleSumbit = (e) => {
    e.preventDefault();
  };


  const [Desc, setDesc] = useState([]);

  const handleNewDesc = () => {
   const newDesc = [...Desc, description];
    setDesc(newDesc);
  };
  


  return (
    <>
      <h1 className='font-sans text-xl font-extrabold bg-slate-200 rounded p-2 text-center'>Experience</h1>

      <div className="flex justify-center">
      <form onSubmit={handleSumbit}>
        
        <label htmlFor="company" className="flex justify-center pt-3 text-md font-medium leading-6 text-gray-900"> Company</label>

        <input
            onChange={(e) => setCompany(e.target.value)}
            value={company}
            name="company"
            id="company"
            type={"text"}
            className="rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

          <label htmlFor="position" className="flex justify-center pt-3 text-md font-medium leading-6 text-gray-900"> Position</label>

          <input
            onChange={(e) => setPosition(e.target.value)}
            value={position}
            name="position"
            id="position"
            type={"text"}
            className="rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

          <label htmlFor="jobStart" className="flex justify-center pt-3 text-md font-medium leading-6 text-gray-900"> Start Date</label>

          <input
            onChange={(e) => setJobStart(e.target.value)}
            value={jobStart}
            name="jobStart"
            id="jobStart"
            placeholder="Feb. 2022"
            type={"text"}
            className="rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

          <label htmlFor="jobEnd" className="flex justify-center pt-3 text-md font-medium leading-6 text-gray-900"> End Date</label>
          

          <input
            onChange={(e) => setJobEnd(e.target.value)}
            value={jobEnd}
            name="jobEnd"
            id="jobEnd"
            placeholder="May 2023"
            type={"text"}
            className="rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

          <label htmlFor="description" className="flex justify-center pt-3 text-md font-medium leading-6 text-gray-900">Description</label>

          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            name="description"
            id="description"
            placeholder="Enter description"
            className="rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-32"
          />

          <div className="flex justify-center pt-3">
            <button type="button" onClick={handleNewDesc} className="flex flex- rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
              Add Description
            </button>
          </div>

        </form>



          <ul>
            {Desc.map((desc, index) => (
              <li className=' list-disc' key={index}>{desc}</li>
            ))}
          </ul>

      </div>
    </>
  )
}

export default Experience