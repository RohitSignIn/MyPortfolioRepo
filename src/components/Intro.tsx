import TechStackUsed from "./TechStackUsed";
import introData from "../data/introData";

export const Intro = () => {
  return (
    <section title='Bhagwan Singh intro' className='text-textColor1'>
      <section className='flex flex-col'>
        <section className='intro'>
          <h1 className='text-6xl'>{introData.mainLine}</h1>
          <h2 className='text-6xl pt-2'>{introData.tagLine}</h2>
          <p className='text-sm pt-2'>{introData.role}</p>
          <section>
            <p className='text-lg pt-8 text-textColor2'>{introData.intro}</p>
          </section>
        </section>
        <TechStackUsed list={introData.skills} />
      </section>
    </section>
  );
};

export default Intro;
