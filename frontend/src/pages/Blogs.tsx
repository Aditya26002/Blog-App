import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import { useBlogs } from "../hooks";

const Blog = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </div>
    );
  }
  return (
    <>
      <Appbar />
      <div className="h-screen flex flex-col items-center ">
        <div className="max-w-xl overflow-y-scroll no-scrollbar">
          <BlogCard
            authtorName="Aditya Daksh"
            publishedDate="20 Dec, 2022"
            title="7 Blogs That I Totally Enjoy Reading Every Day"
            content="Over the past few years, I have moved away from following primarily recipe blogs to spending my time enjoying other types of lifestyle blogs, and it has been awesome. I have blog categories on Feedly for photographers I admire, cool people working for social justice"
          />
          <BlogCard
            authtorName="Aditya Daksh"
            publishedDate="20 Dec, 2022"
            title="7 Blogs That I Totally Enjoy Reading Every Day"
            content="Over the past few years, I have moved away from following primarily recipe blogs to spending my time enjoying other types of lifestyle blogs, and it has been awesome. I have blog categories on Feedly for photographers I admire, cool people working for social justice"
          />
          <BlogCard
            authtorName="Aditya Daksh"
            publishedDate="20 Dec, 2022"
            title="7 Blogs That I Totally Enjoy Reading Every Day"
            content="Over the past few years, I have moved away from following primarily recipe blogs to spending my time enjoying other types of lifestyle blogs, and it has been awesome. I have blog categories on Feedly for photographers I admire, cool people working for social justice"
          />
          <BlogCard
            authtorName="Aditya Daksh"
            publishedDate="20 Dec, 2022"
            title="7 Blogs That I Totally Enjoy Reading Every Day"
            content="Over the past few years, I have moved away from following primarily recipe blogs to spending my time enjoying other types of lifestyle blogs, and it has been awesome. I have blog categories on Feedly for photographers I admire, cool people working for social justice"
          />
        </div>
      </div>
    </>
  );
};

export default Blog;
