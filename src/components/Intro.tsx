import TechStackUsed from "./TechStackUsed";
import introData from "../data/introData";

export const Intro = () => {
  return (
    <section title='Bhagwan Singh intro' className='text-textColor1'>
      <section className='flex flex-col items-center lg:items-start'>
        <section className='intro text-center lg:text-left'>
          <h1 className='text-2xl md:text-3xl lg:text-5xl'>
            {introData.mainLine}
          </h1>
          <h2 className='text-2xl md:text-3xl lg:text-5xl pt-2'>
            {introData.tagLine}
          </h2>
          <p className='text-xs md:text-sm lg:pt-2'>{introData.role}</p>
          <section>
            <p className='hidden md:block md:text-lg md:pt-4 lg:pt-8 text-textColor2'>
              {introData.intro}
            </p>
          </section>
        </section>
        <TechStackUsed list={introData.skills} />
      </section>
    </section>
  );
};

export default Intro;
