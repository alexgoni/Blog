import React from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <>
      <div className="profile">
        <div className="profile__info">
          <div className="profile__img" />
          <div className="profile__email">goni000211@gmail.com</div>
          <div className="profile__name">alexgoni</div>
        </div>
        <Link to="/" className="profile__logout">
          로그아웃
        </Link>
      </div>
    </>
  );
}
