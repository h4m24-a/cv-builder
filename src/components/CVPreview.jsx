import React from "react";

const CVPreview = ({ fullName, email, number }) => {
  return (
    <>
      <h1>{fullName}</h1>
      <h1>{email}</h1>
      <h1>{number}</h1>
    </>
  );
};

export default CVPreview;
