/* eslint-disable react/prop-types */
import React from "react";

const InputField = ({ label, id, value, onChange, type }) => (
  <div className="w-full md:w-1/2 lg:w-1/3 p-2 flex flex-col items-center">
    <label htmlFor={id} className="pt-3 text-md font-medium leading-6 text-gray-900 flex justify-center">{label}</label>
    <input
      onChange={onChange}
      value={value}
      name={id}
      id={id}
      type={type}
      className="bg-slate-200 font-roboto rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
    />
  </div>
);

export default InputField;