import React from "react";

import Project from "./Project";

import projectInterface from "../interface/projectInterface";
import projectBoardType from "../interface/projectBoardType";

interface receivedProps {
  title: projectBoardType;
  projectsData: projectInterface[];
}

const ProjectContainer: React.FC<receivedProps> = ({ title, projectsData }) => {
  return (
    <section className='w-[80%] text-slate-200 mt-4'>
      <h4 className='text-2xl py-4'>{title}</h4>
      <section className='flex gap-6 flex-wrap'>
        {projectsData.map((project) => {
          return <Project key={project.url} projectData={project} />;
        })}
      </section>
    </section>
  );
};

export default ProjectContainer;
