/* eslint-disable react/prop-types */
import React from "react";
import InputField from "./InputField";

const Skills = ({ skill, setSkill }) => {
  const addForm = () => {
    setSkill((prevState) => [
      ...prevState,
      { id: prevState.length + 1, techSkill: "" },
    ]);
  };

  const handleInputValue = (index, field, value) => {
    setSkill(prevState => [
        ...prevState.slice(0, index),
        {...prevState[index], [field]: value},
        ...prevState.slice(index + 1)
    ]);
  };




  return (
    <>
      <h1 className="font-roboto text-xl font-extrabold bg-red-200 rounded p-2 mt-8 text-center">
        Technical Skills
      </h1>

      <div className="flex  justify-center">
      <form className="flex flex-wrap justify-center md:flex-wrap">
          {skill.map((skills, index) => (
            <div key={index} className="flex  justify-center lg:flex ">
              <InputField
                id={`techSkill-${skills.id}`}
                value={skills.techSkill}
                onChange={(e) => handleInputValue(index, "techSkill", e.target.value)}
                type="text"
              />
            </div>
          ))}

        </form>
      </div>
          <div
            className="flex items-center mx-auto justify-center w-10 h-10 text-white transition-colors  duration-150 bg-red-500 rounded-full focus:shadow-outline hover:bg-red-700"
            onClick={addForm}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
    </>
  );
};

export default Skills;
