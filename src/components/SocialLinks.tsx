import { RiLinkedinFill } from "react-icons/ri";
import { ImGithub } from "react-icons/im";
import { SiLeetcode } from "react-icons/si";
import { ImCodepen } from "react-icons/im";

function SocialLinks() {
  return (
    <section className='w-[4.5rem] h-[80vh] fixed backdrop-blur-lg rounded-xl left-[-8px] top-[10vh] border-2 border-borderColor z-50 text-textColor2'>
      <section className='flex flex-col w-full h-full justify-evenly items-center py-6'>
        <section className=''>
          <a href='#'>
            <ImGithub className='transition ease-in-out duration-300 text-3xl hover:fill-fillColor' />
          </a>
        </section>
        <section className=''>
          <a href='#'>
            <RiLinkedinFill className='transition ease-in-out duration-300 text-3xl hover:fill-fillColor' />
          </a>
        </section>
        <section className=''>
          <a href='#'>
            <SiLeetcode className='transition ease-in-out duration-300 text-3xl hover:fill-fillColor' />
          </a>
        </section>
        <section className=''>
          <a href='#'>
            <ImCodepen className='transition ease-in-out duration-300 text-3xl hover:fill-fillColor' />
          </a>
        </section>
      </section>
    </section>
  );
}

export default SocialLinks;
