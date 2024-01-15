import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import PostList from "components/post/PostList";
import Carousel from "components/layout/Carousel";

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <PostList />
      <Footer />
    </>
  );
}
