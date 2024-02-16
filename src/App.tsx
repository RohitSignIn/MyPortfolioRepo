import ProjectContainer from "./components/ProjectContainer";
import SocialLinks from "./components/SocialLinks";
import FrontCard from "./components/FrontCard";
import Footer from "./components/Footer";
import { liveProjects } from "./data/projectsData";

export default function App() {
  return (
    <section>
      <section className='hidden md:block'>
        <SocialLinks />
      </section>
      <section className='font-sans w-full h-[100vh]'>
        <section className='bg-[url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] w-full h-[100vh] flex justify-evenly items-center'>
          <FrontCard />
        </section>
      </section>

      {/* Project Section STARTS */}
      <section className='flex flex-col items-center w-full min-h-[100vh] px-4 py-8 bg-background2 text-textColor1'>
        <ProjectContainer title='Live Projects' projectsData={liveProjects} />
        <ProjectContainer title='Peak Projects' projectsData={liveProjects} />
      </section>

      {/* Footer Starts */}
      <section className='w-full h-[40vh]'>
        <Footer />
      </section>
    </section>
  );
}
