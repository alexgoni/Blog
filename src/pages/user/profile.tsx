import React from "react";
import Profile from "components/Profile";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import PostList from "components/post/PostList";

export default function ProfilePage() {
  return (
    <>
      <Header />
      <Profile />
      <PostList defaultTab="my" />
      <Footer />
    </>
  );
}
