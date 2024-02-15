import Intro from "./Intro";
import PortfImgCon from "./PortfImgCon";

const FrontCard = () => {
  return (
    <section className='flex justify-evenly items-center p-8 rounded-lg backdrop-blur-lg border-b-2 border-t-2 border-[#a19068]'>
      <Intro />
      <PortfImgCon />
    </section>
  );
};

export default FrontCard;
