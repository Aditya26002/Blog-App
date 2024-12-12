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
        <div className="h-screen flex flex-col items-center pt-16">
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
      <div className="flex flex-col items-center pt-16 z-0 h-screen">
        <div className="max-w-xl w-full overflow-y-auto no-scrollbar">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              authtorName={blog.author.name || "Anonymous"}
              publishedDate={"2 Dec"}
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
