import React from "react";

// eslint-disable-next-line react/prop-types
const CVPreview = ({
  fullName,
  email,
  number,
  schoolName,
  degree,
  startDate,
  endDate,
}) => {

  return (
    <>
      <div>
        <h1 className=" text-3xl text-center font-bold font-serif">
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

      <div>
      <h2 className="">{schoolName}</h2>
      <h2>{degree}</h2>
      <h2>{startDate}</h2>
      <h2>{endDate}</h2>
      </div>

      <h1 className="mt-5 text-xl font-bold border-b-2 border-black">
        Experience
      </h1>
    </>
  );
};

export default CVPreview;
