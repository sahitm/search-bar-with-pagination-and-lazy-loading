import React from "react";

function RenderedPosts({ apiData }) {
  return (
    <div>
      {apiData.map((post) => (
      <article key={post.id}>
        <div>
          <div className="bg-gray-400  px-3  lg:px-6 lg:py-4 rounded-tl-3xl rounded-tr-3xl">
            <img
              className="m-auto rounded-3xl"
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${post.poster_path}`}
              alt={`${post.title} movie poster`}
            />
          </div>
          <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
            <p className="text-sm text-white font-semibold tracking-wide">
              Rating: {post.vote_average}
            </p>
            <p className="text-sm text-white font-semibold tracking-wide">
              Release Date: {post.release_date}
            </p>
          </div>
          <div className="bg-gray-300 px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
            <h1 className="text-lg text-gray-900 font-semibold tracking-wider">
              {post.title}
            </h1>
            <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">
              {post.overview}
            </p>
          </div>
        </div>
      </article>
      ))}
    </div>
  );
}

export default RenderedPosts;
