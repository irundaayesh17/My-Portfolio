import React, { useState } from "react";
import { Github, Linkedin } from "lucide-react";

interface ProjectCardProps {
  title: string;
  date: string;
  description: string;
  tags: string[];
  image: string;
  githubLink?: string;
  linkedinLink?: string;
}

const ProjectCard = ({ title, date, description, tags, image, githubLink, linkedinLink }: ProjectCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const truncatedDescription = description.length > 150 ? description.slice(0, 150) + "..." : description;

  return (
    <div className="bg-primary rounded-lg border border-black shadow-lg p-3 flex flex-col h-full">
      {/* Image Section */}
      <div className="w-full h-46 flex items-center justify-center">
        <img src={image} alt={title} className="h-full object-cover rounded-md" />
      </div>

      {/* Title & Date */}
      <div className="mt-2 flex flex-col">
        <h3 className="text-[16px] font-semibold">{title}</h3>
        <p className="text-[13px] text-gray-200">{date}</p>
      </div>

      {/* Description with "Read More" */}
      <div className="mt-2 flex-grow min-h-[80px]">
        <p className="text-[13px] text-left">
          {expanded ? description : truncatedDescription}
          {description.length > 150 && (
            <button
              className="text-blue-400 ml-1 font-semibold cursor-pointer"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          )}
        </p>
      </div>

      {/* Tags Section */}
      <div className="mt-2 flex flex-wrap gap-2">
        {tags.length > 0 ? (
          tags.map((tag, index) => (
            <span key={index} className="bg-zinc-950 text-[12px] px-2 py-1 rounded-md">
              {tag}
            </span>
          ))
        ) : (
          <span className="text-gray-400 text-sm">No tags available</span>
        )}
      </div>

      {/* Buttons Section */}
      <div className="mt-auto flex justify-start gap-2 min-h-[40px] items-center">
        {githubLink ? (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-950 text-white text-[12px] px-2 py-1 rounded-md hover:bg-zinc-900 font-semibold flex items-center gap-1"
          >
            <Github size={14} />
            GitHub
          </a>
        ) : (
          <span className="text-gray-400 flex items-center gap-1">
            <Github size={14} />
            No GitHub
          </span>
        )}
        {linkedinLink ? (
          <a
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-950 text-white text-[12px] px-2 py-1 rounded-md hover:bg-zinc-900 font-semibold flex items-center gap-1"
          >
            <Linkedin size={14} />
            LinkedIn
          </a>
        ) : (
          <span className="text-gray-400 flex items-center gap-1">
            <Linkedin size={14} />
            No LinkedIn
          </span>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
