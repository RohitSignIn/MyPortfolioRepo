import { MdMail } from "react-icons/md";
import { ImGithub } from "react-icons/im";
import { RiLinkedinFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { ImCodepen } from "react-icons/im";

const Links = () => {
  return (
    <>
      <section className=''>
        <a href='#'>
          <MdMail className='transition ease-in-out duration-300 text-[1.4rem] md:text-3xl hover:fill-fillColor' />
        </a>
      </section>
      <section className=''>
        <a href='#'>
          <ImGithub className='transition ease-in-out duration-300 text-[1.4rem] md:text-3xl hover:fill-fillColor' />
        </a>
      </section>
      <section>
        <a href='#'>
          <RiLinkedinFill className='transition ease-in-out duration-300 text-[1.4rem] md:text-3xl hover:fill-fillColor' />
        </a>
      </section>
      <section>
        <a href='#'>
          <SiLeetcode className='transition ease-in-out duration-300 text-[1.4rem] md:text-3xl hover:fill-fillColor' />
        </a>
      </section>
      <section>
        <a href='#'>
          <ImCodepen className='transition ease-in-out duration-300 text-[1.4rem] md:text-3xl hover:fill-fillColor' />
        </a>
      </section>
    </>
  );
};

export default Links;
