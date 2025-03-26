import { useState } from "react";

interface BlogCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
  link: string;
}

const BlogCard = ({ title, date, description, image, link }: BlogCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const truncatedDescription = description.length > 150 ? description.slice(0, 150) + "..." : description;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-primary rounded-lg border border-black shadow-lg p-3 flex flex-col h-full cursor-pointer hover:shadow-xl transition-shadow"
    >
      {/* Image Section */}
      <div className="w-full h-46 flex items-center justify-center">
        <img src={image} alt={title} className="h-full object-cover rounded-md" />
      </div>

      {/* Title & Date */}
      <div className="mt-2 flex flex-col">
        <h3 className="text-[18px] font-semibold">{title}</h3>
        <p className="text-[13px] text-gray-200">{date}</p>
      </div>

      {/* Description with "Read More" */}
      <div className="mt-2 flex-grow min-h-[80px]">
        <p className="text-[13px] text-left">
          {expanded ? description : truncatedDescription}
          {description.length > 150 && (
            <button
              className="text-blue-400 ml-1 font-semibold cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setExpanded(!expanded);
              }}
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          )}
        </p>
      </div>
    </a>
  );
};

export default BlogCard;
