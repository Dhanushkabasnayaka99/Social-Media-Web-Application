import Post from "../../components/post/Post";
import Posts from "../../components/Posts.jsx/Posts";
import Stories from "../../components/stories/Stories";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <Stories />
     <Posts/>
    </div>
  );
}
