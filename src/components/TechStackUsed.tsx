import React from "react";
import techStackType from "../interface/techStackType";

interface receivedProps {
  list: techStackType;
}

const TechStackUsed: React.FC<receivedProps> = ({ list }) => {
  return (
    <section
      title='Tech Stack used'
      className='pt-2 text-xs wrap flex flex-wrap'
    >
      {list.map((val) => {
        return (
          <p
            key={val}
            className='bg-background1 mr-2 text-textColor4 font-medium py-1 px-2 mt-2 rounded-md'
          >
            <strong>{val}</strong>
          </p>
        );
      })}
    </section>
  );
};

export default TechStackUsed;
