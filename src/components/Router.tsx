import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/home";
import PostNew from "../pages/posts/new";
import PostEdit from "../pages/posts/edit";
import LoginPage from "../pages/user/login";
import SignupPage from "../pages/user/signup";
import PostPage from "../pages/posts/detail";
import ProfilePage from "../pages/user/profile";
import PostListPage from "../pages/posts";

interface RouterProps {
  isAuthenticated: boolean;
}

export default function Router({ isAuthenticated }: RouterProps) {
  return (
    <>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<PostListPage />} />
            <Route path="/posts/:id" element={<PostPage />} />
            <Route path="/posts/new" element={<PostNew />} />
            <Route path="/posts/edit/:id" element={<PostEdit />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<LoginPage />} />
          </>
        )}
      </Routes>
    </>
  );
}
