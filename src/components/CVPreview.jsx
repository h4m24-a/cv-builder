/* eslint-disable react/prop-types */
import React from "react";

const CVPreview = ({
  fullName,
  email,
  number,
  link,
  summary,
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
        <h1 className=" text-4xl text-center font-bold font-cambo">
          {fullName}
        </h1>

        <div className="flex justify-center gap-3 mt-1">
          <p className="text-md">{email}</p>
          <p className="text-md">{number}</p>
          <p className="text-md">{link}</p>
        </div>
        <p className="font-poppins text-sm pt-3">{summary}</p>
      </div>

      <h1 className="mt-5 text-2xl font-bold border-b-2 border-black">Education</h1>

      <div className="flex flex-col">
        <div className="flex justify-between pt-1">
          <h2 className="font-poppins">{schoolName}</h2>
          <h2 className="font-poppins justify-end">{fullDate}</h2>
        </div>
      <h2 className="font-poppins italic text-gray-800">{degree}</h2>
      </div>

      <h1 className="mt-5 text-2xl font-bold border-b-2 border-black">Experience</h1>

      <div>

        <div className="flex flex-col"> 
          <h2 className="font-poppins font-semibold pt-1 ">{company}</h2>
          <div className="flex justify-between">
            <h2 className="font-poppins italic text-gray-800">{position}</h2>
            <h2 className="font-poppins">{fullJobDate}</h2>
          </div>
        </div>


        <h2 className="font-poppins mt-4">
          <ul className="pl-5">
            {description.map((descriptions, index) => (
              <li className="list-disc pb-2" key={index}>
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
