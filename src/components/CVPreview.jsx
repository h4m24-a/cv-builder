/* eslint-disable react/prop-types */
import React from "react";

const CVPreview = ({
  fullName,
  email,
  number,
  schoolName,
  degree,
  fullDate,
  company,
  position,
  description,
  fullJobDate,
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

      <div>

        <div className="flex flex-wrap">
          <h2 className="font-poppins w-full sm:w-1/2 md:w-1/4">{position}</h2>
          <h2 className="font-poppins w-full sm:w-1/2 md:w-1/4">{fullJobDate}</h2>
        </div>

        <h2 className="font-poppins italic mt-2">{company}</h2>

        <h2 className="font-poppins mt-4">
          <ul className="pl-5">
            {description.map((descriptions, index) => (
              <li className="list-disc" key={index}>
                {descriptions}
              </li>
            ))}
          </ul>
        </h2>
        
      </div>
    </>
  );
};

export default CVPreview;
