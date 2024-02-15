import techStackInterface from "./techStackType";

interface projectInterface {
  url: string;
  imgUrl: string;
  title: string;
  description: string;
  techStackUsed: techStackInterface;
}

export default projectInterface;
