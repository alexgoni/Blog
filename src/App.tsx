import React from "react";
import "./App.css";
import { Route, Routes, Navigate, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">post</Link>
          </li>
          <li>
            <Link to="/posts/:id">details</Link>
          </li>
          <li>
            <Link to="/posts/new">new</Link>
          </li>
          <li>
            <Link to="/posts/edit/:id">edit</Link>
          </li>
          <li>
            <Link to="/profile">profile</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<h1>home page</h1>} />
        <Route path="/posts" element={<h1>post</h1>} />
        <Route path="/posts/:id" element={<h1>details</h1>} />
        <Route path="/posts/new" element={<h1>new post</h1>} />
        <Route path="/posts/edit/:id" element={<h1>edit</h1>} />
        <Route path="/profile" element={<h1>profile</h1>} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
}

export default App;
