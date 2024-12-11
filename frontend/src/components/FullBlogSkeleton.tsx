const FullBlogSkeleton = () => {
  return (
    <div>
      <div className="flex justify-center animate-pulse">
        <div className="px-4 sm:px-6 lg:px-8 pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 flex flex-col gap-3">
              <div className="h-6 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full  max-w-[120px] mb-2.5"></div>
              <div className="mt-3">
                <div role="status" className="space-y-2.5  max-w-lg">
                  <div className="flex items-center w-full">
                    <div className="h-2.5 bg-gray-200 rounded-full w-32"></div>
                    <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-24"></div>
                    <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-full"></div>
                  </div>
                  <div className="flex items-center w-full max-w-[480px]">
                    <div className="h-2.5 bg-gray-200 rounded-full w-full"></div>
                    <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-full"></div>
                    <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-24"></div>
                  </div>
                  <div className="flex items-center w-full max-w-[400px]">
                    <div className="h-2.5 bg-gray-300 rounded-full w-full"></div>
                    <div className="h-2.5 ms-2 bg-gray-200 rounded-full w-80"></div>
                    <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-full"></div>
                  </div>
                  <div className="flex items-center w-full max-w-[480px]">
                    <div className="h-2.5 ms-2 bg-gray-200 rounded-full w-full"></div>
                    <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-full"></div>
                    <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-24"></div>
                  </div>
                  <div className="flex items-center w-full max-w-[440px]">
                    <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-32"></div>
                    <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-24"></div>
                    <div className="h-2.5 ms-2 bg-gray-200 rounded-full w-full"></div>
                  </div>
                  <div className="flex items-center w-full max-w-[360px]">
                    <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-full"></div>
                    <div className="h-2.5 ms-2 bg-gray-200 rounded-full w-80"></div>
                    <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-full"></div>
                  </div>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 px-7">
              <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
              <div className="flex gap-3 items-center">
                <div className="h-8 w-8 bg-gray-200 rounded-full mb-4"></div>
                <div className="flex flex-col gap-1">
                  <div className="h-4 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
                  <div className="flex items-center w-full">
                    <div className="h-2.5 bg-gray-200 rounded-full w-full"></div>
                    <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-full"></div>
                    <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-24"></div>
                  </div>
                  <div className="flex items-center w-full">
                    <div className="h-2.5 bg-gray-200 rounded-full w-32"></div>
                    <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-24"></div>
                    <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBlogSkeleton;
