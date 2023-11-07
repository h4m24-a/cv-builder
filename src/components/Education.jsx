import React from "react";

// eslint-disable-next-line react/prop-types
const Education = ({setSchoolName, schoolName, setDegree, degree, setStartDate, startDate, setEndDate, endDate}) => {

  const handleSumbit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1 className="font-sans text-xl font-extrabold bg-slate-200 rounded p-2 mt-2 text-center">
        Education
      </h1>

      <div className="flex justify-center">
      <form onSubmit={handleSumbit}>
        
        <label htmlFor="schoolName" className="flex justify-center pt-3 text-md font-medium leading-6 text-gray-900"> School Name</label>

        <input
            onChange={(e) => setSchoolName(e.target.value)}
            value={schoolName}
            name="schoolName"
            id="schoolName"
            type={"text"}
            className="rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

          <label htmlFor="degree" className="flex justify-center pt-3 text-md font-medium leading-6 text-gray-900"> Degree</label>

          <input
            onChange={(e) => setDegree(e.target.value)}
            value={degree}
            name="degree"
            id="degree"
            type={"text"}
            className="rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

          <label htmlFor="startDate" className="flex justify-center pt-3 text-md font-medium leading-6 text-gray-900"> Start Date</label>

          <input
            onChange={(e) => setStartDate(e.target.value)}
            value={startDate}
            name="startDate"
            id="startDate"
            placeholder="September 2023"
            type={"text"}
            className="rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

          <label htmlFor="endDate" className="flex justify-center pt-3 text-md font-medium leading-6 text-gray-900"> End Date</label>
          

          <input
            onChange={(e) => setEndDate(e.target.value)}
            value={endDate}
            name="endDate"
            id="endDate"
            placeholder="July 2025"
            type={"text"}
            className="rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

        </form>


      </div>
    </>
  );
};

export default Education;
