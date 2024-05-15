import React from "react";
import { Fade } from "react-awesome-reveal";

const Experience = () => {
  return (
    <div id="experience" className="lg:pr-28">
      <Fade triggerOnce={true} direction="up" delay={300} cascade damping={0.5}>
        <h3 className="px-5 lg:px-0 title my-2.5 pt-28 ">Experience</h3>
        <p className="p-5 lg:px-0 text-[#E95C2CFF] text-xl font-semibold">2022 - present</p>
        <p className="p-5 lg:px-0">
          I've been on an exciting journey of learning web development
          since 2022 at MMS-it. During this time, I've dedicated myself to mastering
          various web technologies, including HTML, CSS, JavaScript, and more.
          I've worked on personal projects, tackled coding challenges, and
          continuously expanded my skills.
        </p>
      </Fade>
    </div>
  );
};

export default Experience;
