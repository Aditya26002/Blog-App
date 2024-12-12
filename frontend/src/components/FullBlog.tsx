import { Blog } from "../hooks";
import Appbar from "./Appbar";

const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <>
      <Appbar />
      <div className="flex justify-center z-0">
        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 flex flex-col gap-3">
              <div className="text-5xl font-extrabold">{blog.title}</div>
              <div className="text-slate-500">Post on 2 dec</div>
              <div className="mt-3 text-slate-700 whitespace-pre-wrap break-words">
                {blog.content}
              </div>
            </div>
            <div className="lg:col-span-4 px-7">
              <div className="font-semibold text-slate-600 text-lg">
                About the author -
              </div>
              <div className="flex gap-3">
                <div className="flex items-center">
                  <Avatar name={blog.author.name} />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-3xl font-bold capitalize">
                    {blog.author.name}
                  </div>
                  <div>Random catchphrase here used by author</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullBlog;

function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-semibold text-xl text-gray-800 dark:text-gray-100 capitalize">
        {name[0]}
      </span>
    </div>
  );
}
