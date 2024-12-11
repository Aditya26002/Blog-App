import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import BlogSkeleton from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <>
        <Appbar />
        <div className="h-screen flex flex-col items-center ">
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
        </div>
      </>
    );
  }
  return (
    <>
      <Appbar />

      <div className="h-screen flex flex-col items-center ">
        <div className="max-w-xl overflow-y-scroll no-scrollbar">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              authtorName={blog.author.name || "Anonymous"}
              publishedDate={"ja"}
              title={blog.title}
              content={blog.content}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
