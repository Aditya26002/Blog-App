import { useParams } from "react-router-dom";
import FullBlog from "../components/FullBlog";
import { useBlog } from "../hooks";
import FullBlogSkeleton from "../components/FullBlogSkeleton";
import Appbar from "../components/Appbar";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });

  if (loading) {
    return (
      <div>
        <Appbar />
        <div className="">
          <FullBlogSkeleton />
        </div>
      </div>
    );
  }

  return (
    <div>
      {blog ? (
        <FullBlog blog={blog} />
      ) : (
        <div className="h-screen flex items-center justify-center">
          <h1 className="text-2xl font-bold">Blog not found</h1>
        </div>
      )}
    </div>
  );
};

export default Blog;
