import React, { useContext, useEffect, useState } from "react";
import { Context } from "../state/context";
const Posts = React.lazy(() => import('./RenderedPosts'))

function LazyLoading() {
  const { query } = useContext(Context);
  const [apiData, setApiData] = useState([]);


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
                <React.Suspense fallback={<div>loading...</div>}>
                <Posts apiData = {apiData}/>
                </React.Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LazyLoading;
