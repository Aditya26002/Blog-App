const BlogSkeleton = () => {
  return (
    <div>
      <div role="status" className="max-w-sm animate-pulse">
        <div>
          <div className="flex flex-col gap-3  p-5 w-screen ">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 bg-gray-200 rounded-full mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
            </div>
            <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>

            <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default BlogSkeleton;
