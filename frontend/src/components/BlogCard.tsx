import { Timer } from "lucide-react";

interface BlogCardProps {
  authtorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

const BlogCard = ({
  authtorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <div className="flex flex-col gap-3 border-b border-slate-200 p-5">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center">
          <Avatar name={authtorName} />
        </div>
        <div className="flex items-center text- font-semibold">
          {authtorName}
        </div>
        {/* DOT */}
        <div>•</div>
        <div className="flex items-center ">{publishedDate}</div>
      </div>
      <div className="text-2xl font-bold">{title}</div>
      <div className="text-sm font-serif tracking-wide">
        {content.slice(0, 200) + "..."}
      </div>

      <div className="text-sm font-semibold text-zinc-400 flex items-center gap-1">
        <Timer size={16} />
        {Math.ceil(content.length / 100) + " min read"}
      </div>
    </div>
  );
};

function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-6 h6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}

export default BlogCard;
