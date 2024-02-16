import ProjectContainer from "./components/ProjectContainer";
import SocialLinks from "./components/SocialLinks";
import FrontCard from "./components/FrontCard";
import Footer from "./components/Footer";
import {
  miniGamesProjects,
  liveProjects,
  backendProjects,
  miniProjects,
} from "./data/projectsData";

export default function App() {
  return (
    <section>
      <section className='hidden md:block'>
        <SocialLinks />
      </section>
      <section className='font-sans w-full h-[100vh]'>
        <section className='bg-[url("/bg.webp")] w-full h-[100vh] flex justify-evenly items-center'>
          <FrontCard />
        </section>
      </section>

      {/* Project Section STARTS */}
      <section className='flex flex-col gap-4 items-center w-full min-h-[100vh] px-4 py-8 bg-background2 text-textColor1'>
        <ProjectContainer title='Frontend - Live' projectsData={liveProjects} />
        <ProjectContainer
          title='Backend - Github'
          projectsData={backendProjects}
        />
        <ProjectContainer title='Mini Games' projectsData={miniGamesProjects} />
        <ProjectContainer
          title='Mini Projects - HTML CSS JS'
          projectsData={miniProjects}
        />
      </section>

      {/* Footer Starts */}
      <section className='w-full h-[40vh]'>
        <Footer />
      </section>
    </section>
  );
}
