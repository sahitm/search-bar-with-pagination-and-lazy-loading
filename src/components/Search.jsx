import React, { useContext } from "react";
import { Context } from "../state/context";

function Search() {
 
  const {SetQuery} = useContext(Context);

  return (
    <>
      <div>
        <div className="py-5">
          <div className="bg-white  md:max-w-[900px] w-full shadow rounded mx-auto pb-10 px-6 ">
            <div className=" flex justify-start items-center py-7 relative">
              <input
                className="text-sm leading-none text-left text-gray-600 px-4 py-3 w-full border rounded border-gray-300  outline-none"
                type="text"
                placeholder="Search"
                onChange={(e) => SetQuery(e.target.value) }
              />
              <svg
                className="absolute right-3 z-10 cursor-pointer"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                  stroke="#4B5563"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 21L15 15"
                  stroke="#4B5563"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {/* <button className="text-sm font-medium leading-none text-white text-center w-full px-6 py-4 bg-indigo-700 rounded-md  hover:bg-indigo-600 transform duration-300 ease-in-out">
              Search
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
