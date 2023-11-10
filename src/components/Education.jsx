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
            className="rounded-md border-0 mb-6 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

          {/* <div className="flex justify-center gap-3">
            <button type="submit" className="inline-flex items-center justify-center h-12 gap-2 px-6 text-lg font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>

            <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-lg font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-blue-400 hover:bg-blue-600 focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
            </button>
          </div> */}

        </form>


      </div>
    </>
  );
};

export default Education;
