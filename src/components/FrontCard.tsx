import Intro from "./Intro";
import MobSocialLinks from "./MobSocialLinks";
import PortfImgCon from "./PortfImgCon";

const FrontCard = () => {
  return (
    <section className='relative'>
      <section className='flex flex-col-reverse items-center p-4 lg:p-8 rounded-lg backdrop-blur-lg border-b-2 border-t-2 border-borderColor lg:flex-row lg:justify-evenly lg:items-center '>
        <Intro />
        <PortfImgCon />
        <section className='absolute top-0 left-0 md:hidden'>
          <MobSocialLinks />
        </section>
      </section>
    </section>
  );
};

export default FrontCard;
