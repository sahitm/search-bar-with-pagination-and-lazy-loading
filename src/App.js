import React from "react";
import Search from "./components/Search";
import PostList from "./components/PostList";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import LazyLoading from "./components/LazyLoading";
const LazyResults = React.lazy(() => import("./components/LazyLoading"));

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold">Search App</h1>
      <nav className="">
        <ul className="flex justify-evenly">
          <li className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
            <Link to="/">Pagination Search</Link>
          </li>
          <li className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
            <Link to="/lazyloading">Lazy Loading Search</Link>
          </li>
        </ul>
      </nav>
      <Search />
      <Routes>
        <Route exact path="/" element={<PostList />} />
        <Route
          exact
          path="/lazyloading"
          element={
            <React.Suspense fallback="Loading...">
              <LazyResults />
            </React.Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
