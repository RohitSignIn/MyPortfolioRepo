import TechStackUsed from "./TechStackUsed";

import projectInterface from "../interface/projectInterface";

interface receivedProps {
  projectData: projectInterface;
}

const Project: React.FC<receivedProps> = ({ projectData }) => {
  const openNewTab = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section
      title={projectData.title}
      className='bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg'
      onClick={() => openNewTab(projectData.url)}
    >
      <section>
        <img
          width={200}
          height={200}
          src={projectData.imgUrl}
          alt={projectData.title}
        />
      </section>
      <section className='p-2 w-[200px]'>
        <h3>{projectData.title}</h3>
        <p className='text-xs'>{projectData.description}</p>
        <TechStackUsed list={projectData.techStackUsed} />
      </section>
    </section>
  );
};

export default Project;
