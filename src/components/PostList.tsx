import React from "react";
import { Link } from "react-router-dom";

interface PostListProps {
  hasNavigation?: boolean;
}

export default function PostList({ hasNavigation = true }: PostListProps) {
  return (
    <>
      {hasNavigation && (
        <nav className="post__navigation">
          <div className="post__navigation--acitve">전체</div>
          <div>나의 글</div>
        </nav>
      )}

      <div className="post-list">
        {[...Array(10)].map((e, index) => (
          <div key={index} className="post__box">
            <Link to={`/posts/${index}`}>
              <div className="post__profile-box">
                <div className="post__user-img" />
                <div className="post__author">alexgoni</div>
                <div className="post__date">2024.01.13 일요일</div>
              </div>
              <div className="post__title">게시글 {index}</div>
              <div className="post__content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                unde fugit animi corrupti iusto voluptate aliquam commodi
                laboriosam voluptatibus eius? Maiores quis ipsa exercitationem
                sapiente itaque natus vero distinctio ex?
              </div>
              <div className="post__utils-box">
                <div className="post__edit">수정</div>
                <div className="post__delete">삭제</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
