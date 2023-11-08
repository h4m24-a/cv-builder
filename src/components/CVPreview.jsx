/* eslint-disable react/prop-types */
import React from "react";


const CVPreview = ({
  fullName,
  email,
  number,
  schoolName,
  degree,
  fullDate
}) => {

  return (
    <>
      <div>
        <h1 className=" text-3xl text-center font-bold font-cambo">
          {fullName}
        </h1>

        <div className="flex justify-center gap-3 mt-1">
          <p className="text-md">{email}</p>
          <p className="text-md">{number}</p>
        </div>
      </div>


      <h1 className="mt-5 text-xl font-bold border-b-2 border-black">
        Education
      </h1>

      <div className="flex flex-wrap gap-x-10 gap-y-1 pt-1">

      <h2 className="font-poppins">{schoolName}</h2>
      <h2 className="font-poppins">{fullDate}</h2>
      <h2 className="font-poppins italic">{degree}</h2>
      </div>

      <h1 className="mt-5 text-xl font-bold border-b-2 border-black">
        Experience
      </h1>
    </>
  );
};

export default CVPreview;
