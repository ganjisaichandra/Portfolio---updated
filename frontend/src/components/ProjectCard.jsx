import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="my-2">{project.description}</p>
      <p className="text-sm text-gray-500">
        Tech Stack: {project.techStack.join(", ")}
      </p>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 underline"
        >
          Visit Project
        </a>
      )}
    </div>
  );
}
