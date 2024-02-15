import TechStackUsed from "./TechStackUsed";

export const Intro = () => {
  return (
    <section title='Bhagwan Singh intro'>
      <section className='flex flex-col'>
        <section className='intro'>
          <h1 className='text-6xl'>Hi. I'm Bhagwan Singh.</h1>
          <h2 className='text-6xl pt-2'>Full Stack Developer</h2>
          <p className='text-sm pt-2'>Software Engineer</p>
          <section>
            <p className='text-lg pt-8'>
              Have Keen knowledge around React, NodeJS, Pyhton and MySQL
            </p>
          </section>
        </section>
        <TechStackUsed
          list={["Javascript", "React", "NodeJS", "Python", "ExpressJS"]}
        />
      </section>
    </section>
  );
};

export default Intro;
