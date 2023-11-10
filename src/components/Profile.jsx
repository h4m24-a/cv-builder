import React from "react";
// import { useState } from "react";


// eslint-disable-next-line react/prop-types
export default function Profile ({setFirstName, firstName, setLastName, lastName, setEmail, email, setNumber, number, setSummary, summary}) {
  

  const handleSumbit = (e) => {
    e.preventDefault();
  };



  return (
    <>
      <h1 className="font-sans text-xl font-extrabold bg-slate-200 rounded p-2 text-center">
        Profile
      </h1>

      <div className="flex justify-center md:flex flex-wrap">

        <form onSubmit={handleSumbit} className="">
          <label htmlFor="firstName" className="flex justify-center pt-3 text-md font-medium leading-6 text-gray-900"> First Name</label>

          <input
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            name="firstName"
            id="firstName"
            type={"text"}
            className="rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

          <label
            htmlFor="lastName" className="flex justify-center  pt-3 text-md font-medium leading-6 text-gray-900">Last Name</label>

          <input
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            name="lastName"
            id="lastName"
            type={"text"}
            className=" rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

          <label
            htmlFor="email" className="flex justify-center  pt-3 text-md font-medium leading-6 text-gray-900">Email</label>

          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
            id="email"
            type={"text"}
            className="rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

          <label
            htmlFor="number" className="flex justify-center  pt-3 text-md font-medium leading-6 text-gray-900">Number</label>

          <input
            onChange={(e) => setNumber(e.target.value)}
            value={number}
            name="number"
            id="number"
            type={"number"}
            className=" rounded-md border-0  py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

          <label
            htmlFor="summary" className="flex justify-center  pt-3 text-md font-medium leading-6 text-gray-900">Summary</label>

          <textarea
            onChange={(e) => setSummary(e.target.value)}
            value={summary}
            name="summary"
            id="summary"
            type={"text"}
            className="rounded-md border-0 p-2  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-32 w-full"/>


        </form>
      </div>
    </>
  );
}






  // const [profileForm, setProfileForm] = useState({
  //   fullname: "",
  //   email: "",
  //   number: "",
  // });

  // const handleSumbit = (e) => {
  //   e.preventDefault();
  // };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setProfileForm((prevProfileFormData) => ({
  //     ...prevProfileFormData,
  //     [name]: value,
  //   }));
  // };