import React from "react";
import Search from "./components/Search";
import { Routes, Route, Link } from "react-router-dom";
import LazyLoading from "./components/LazyLoading";
import Pagination from "./components/Pagination";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold">Search App</h1>
      <nav className="">
        <ul className="flex justify-evenly">
          <li className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
            <Link to="/">Lazy Loading Search</Link>
          </li>
          <li className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
            <Link to="/pagination">Pagination Search</Link>
          </li>
        </ul>
      </nav>
      <Search />
      <Routes>
        <Route exact path="/" element={<LazyLoading />} />
        <Route exact path="/pagination" element={<Pagination />} />
      </Routes>
    </div>
  );
}

export default App;
