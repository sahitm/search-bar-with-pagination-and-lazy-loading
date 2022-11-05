import React, { useContext, useEffect, useState } from "react";
import { Context } from "../state/context";

function PostList() {
  const { query } = useContext(Context);
  const [apiData, setApiData] = useState([]);

  console.log(apiData);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;

    if (query) {
      const fetchData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setApiData(data.results);
      };

      fetchData();
    }
  }, [query]);

  const renderedPosts = apiData.map((post) => (
    <article key={post.id}>
      <div>
        <div className="bg-gray-300 px-3  lg:px-6 py-4 rounded-tl-3xl rounded-tr-3xl">
          <img
            className="m-auto"
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
  ));

  return (
    <div>
      <div id="posts" className="bg-gray-100 px-4 xl:px-0 py-12">
        <div className="mx-auto container">
          <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-gray-900">
            Search Results
          </h1>
          <div className="mt-12 lg:mt-24 ">
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-8">
              <div>
                <div className="md:w-1/2 m-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-1 gap-8">
                  {renderedPosts}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostList;
