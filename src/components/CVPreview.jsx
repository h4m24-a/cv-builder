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

        <div className="flex justify-center flex-col gap-3 mt-3 md:flex-row">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            <p className="text-md">{number}</p>
          </div>

          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <p className="text-center text-md">{email}</p>
          </div>

          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
            <p className="text-md">{link}</p>
          </div>
        </div>

        <p className="font-poppins text-sm pt-3">{summary}</p>
      </div>

      <h1 className="mt-5 text-2xl font-bold border-b-2 border-black">
        Education
      </h1>

      <div className="flex flex-col">
        <div className="flex flex-wrap justify-between pt-1 md:flex">
          <h2 className="font-poppins">{schoolName}</h2>
          <h2 className="font-poppins justify-end">{fullDate}</h2>
        </div>
        <h2 className="font-poppins italic text-gray-800">{degree}</h2>
      </div>

      <h1 className="mt-5 text-2xl font-bold border-b-2 border-black">
        Experience
      </h1>

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
