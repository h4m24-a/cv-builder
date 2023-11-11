/* eslint-disable react/prop-types */
import React from "react";
import InputField from "./InputField"; // Adjust the import path based on your file structure

export default function Profile({
  setFirstName,
  firstName,
  setLastName,
  lastName,
  setEmail,
  email,
  setNumber,
  number,
  setSummary,
  summary,
}) {
  const handleSumbit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1 className="font-sans text-xl font-extrabold bg-slate-200 rounded p-2 text-center">
        Profile
      </h1>

      <div className="flex justify-center">
        <form onSubmit={handleSumbit} className="flex flex-wrap justify-center">
          <InputField
            label="First Name"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
          />
          <InputField
            label="Last Name"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
          />

          <div className="md:flex w-full justify-center">
          <InputField
            label="Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
          <InputField
            label="Number"
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            type="number"
          />
          </div>
         


          <div className="w-full px-4">
          <label
            htmlFor="summary" className="flex justify-center  pt-3 text-md font-medium leading-6 text-gray-900">Summary</label>

          <textarea
            onChange={(e) => setSummary(e.target.value)}
            value={summary}
            name="summary"
            id="summary"
            type={"text"}
            className="rounded-md border-0 p-2  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-32 w-full"/>
          </div>

        </form>
      </div>
    </>
  );
}