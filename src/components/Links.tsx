import { MdMail } from "react-icons/md";
import { ImGithub } from "react-icons/im";
import { RiLinkedinFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { ImCodepen } from "react-icons/im";

const Links = () => {
  return (
    <>
      <section className=''>
        <a href='mailto:bhagwan.signin@gmail.com'>
          <MdMail className='transition ease-in-out duration-300 text-[1.4rem] md:text-3xl hover:fill-fillColor' />
        </a>
      </section>
      <section className=''>
        <a href='https://github.com/RohitSignIn'>
          <ImGithub className='transition ease-in-out duration-300 text-[1.4rem] md:text-3xl hover:fill-fillColor' />
        </a>
      </section>
      <section>
        <a
          href='https://www.linkedin.com/in/bhagwan-s-b14515232/'
          target='_blank'
        >
          <RiLinkedinFill className='transition ease-in-out duration-300 text-[1.4rem] md:text-3xl hover:fill-fillColor' />
        </a>
      </section>
      <section>
        <a href='https://leetcode.com/BhagwanSingh0168/' target='_blank'>
          <SiLeetcode className='transition ease-in-out duration-300 text-[1.4rem] md:text-3xl hover:fill-fillColor' />
        </a>
      </section>
      <section>
        <a href='https://codepen.io/RohitSignIn' target='_blank'>
          <ImCodepen className='transition ease-in-out duration-300 text-[1.4rem] md:text-3xl hover:fill-fillColor' />
        </a>
      </section>
    </>
  );
};

export default Links;
