import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className=" pagination flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className="page-item text-sm font-medium leading-none cursor-pointer text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2 page-link"
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
