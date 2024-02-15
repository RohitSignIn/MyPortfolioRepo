import { MdMail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <section className='relative font-sans w-full'>
      <section className='bg-[url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] w-full h-[60vh] flex justify-evenly items-center'>
        <section className='flex flex-col items-center'>
          <section className='flex justify-evenly items-center rounded-lg backdrop-blur-lg border-b-2 border-t-2 border-borderColor p-8'>
            <section className='px-6'>
              <a href='#' className='text-6xl text-textColor1'>
                <MdMail />
              </a>
            </section>

            <section className='px-6'>
              <a href='#' className='text-6xl text-textColor1'>
                <IoLogoWhatsapp />
              </a>
            </section>

            <section className='px-6'>
              <a href='#' className='text-6xl text-textColor1'>
                <IoCall />
              </a>
            </section>
          </section>
          <section className='py-4'>
            <p className='text-xl italic text-textColor2'>
              Don't comment bad code- rewrite it.
            </p>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Footer;
