import Links from "./Links";

function SocialLinks() {
  return (
    <section className='w-[4.5rem] h-[80vh] fixed backdrop-blur-lg rounded-xl left-[-8px] top-[10vh] border-2 border-borderColor z-50 text-textColor2'>
      <section className='flex flex-col w-full h-full justify-evenly items-center py-6'>
        <Links />
      </section>
    </section>
  );
}

export default SocialLinks;
