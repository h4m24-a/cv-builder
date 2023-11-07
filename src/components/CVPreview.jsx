import React from "react";

// eslint-disable-next-line react/prop-types
const CVPreview = ({ fullName, email, number, schoolName, degree, startDate, endDate }) => {
  return (
    <>
      <h1>{fullName}</h1>
      <h1>{email}</h1>
      <h1 className=" mb-6">{number}</h1>

      <h1>{schoolName}</h1>
      <h1>{degree}</h1>
      <h1>{startDate}</h1>
      <h1>{endDate}</h1>
    </>
  );
};

export default CVPreview;
