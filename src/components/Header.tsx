import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">Blog</Link>
      </div>
      <div className="header__tab">
        <Link to="/posts/new">글쓰기</Link>
        <Link to="/posts">게시글</Link>
        <Link to="/profile">프로필</Link>
      </div>
    </header>
  );
}
