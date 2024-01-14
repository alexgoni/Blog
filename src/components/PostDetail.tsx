import { Link } from "react-router-dom";

export default function PostDetail() {
  return (
    <>
      <div className="post__detail">
        <div className="post__box">
          <div className="post__title">제목</div>
          <div className="post__profile-box">
            <div className="post__user-img" />
            <div className="post__author">alexgoni</div>
            <div className="post__date">2024.01.13 일요일</div>
          </div>
          <div className="post__utils-box">
            <div className="post__edit">
              <Link to={`/posts/edit/1`}>수정</Link>
            </div>
            <div className="post__delete">삭제</div>
          </div>
          <div className="post__content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime unde
            fugit animi corrupti iusto voluptate aliquam commodi laboriosam
            voluptatibus eius? Maiores quis ipsa exercitationem sapiente itaque
            natus vero distinctio ex?
          </div>
        </div>
      </div>
    </>
  );
}
