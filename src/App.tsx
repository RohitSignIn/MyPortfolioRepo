import projectInterface from "./interface/projectInterface";

import ProjectContainer from "./components/ProjectContainer";
import SocialLinks from "./components/SocialLinks";
import FrontCard from "./components/FrontCard";

export default function App() {
  const projectsData: projectInterface[] = [
    {
      url: "https://rgbacolorpicker.com/",
      imgUrl:
        "https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "RHB COLOR Picker",
      description: "Best Color Picker I Build",
      techStackUsed: ["React", "Node", "JavaScript", "Python"],
    },
    {
      url: "https://rgbacolorpicker.com/",
      imgUrl:
        "https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "RHB COLOR Picker",
      description: "Best Color Picker I Build",
      techStackUsed: ["React", "Node", "JavaScript", "Python"],
    },
    {
      url: "https://rgbacolorpicker.com/",
      imgUrl:
        "https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "RHB COLOR Picker",
      description: "Best Color Picker I Build",
      techStackUsed: ["React", "Node", "JavaScript", "Python"],
    },
  ];

  return (
    <section>
      <SocialLinks />
      <section className='relative font-sans text-white w-full h-[100vh]'>
        <section className='bg-[url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] w-full h-[100vh] flex justify-evenly items-center'>
          <FrontCard />
        </section>
      </section>

      {/* Project Section STARTS */}
      <section className='flex flex-col items-center w-full min-h-[100vh] pt-6 bg-[#2d2d2d]'>
        <ProjectContainer title='Live Projects' projectsData={projectsData} />
        <ProjectContainer title='Peak Projects' projectsData={projectsData} />
      </section>
    </section>
  );
}
