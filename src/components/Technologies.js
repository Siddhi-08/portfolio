import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { RiReactjsLine } from 'react-icons/ri';
import { FaNodeJs, FaDatabase, FaJava } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiThealgorithms, SiTailwindcss, SiMui } from 'react-icons/si';
import { DiMysql } from 'react-icons/di';
import { IoLogoJavascript, IoLogoHtml5 } from 'react-icons/io';
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import {useMediaQuery} from 'react-responsive';

const Technologies = () => {
  const skills = [
    { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, name: 'React' },
    { icon: <FaNodeJs className="text-7xl text-green-500" />, name: 'Node.js' },
    { icon: <SiExpress className="text-7xl text-yellow-400" />, name: 'Express' },
    { icon: <SiMongodb className="text-7xl text-green-400" />, name: 'MongoDB' },
    { icon: <DiMysql className="text-7xl text-cyan-400" />, name: 'MySQL' },
    { icon: <SiThealgorithms className="text-7xl text-pink-400" />, name: 'Algorithms' },
    { icon: <FaJava className="text-7xl text-red-400" />, name: 'Java' },
    { icon: <IoLogoJavascript className="text-7xl text-yellow-400" />, name: 'JavaScript' },
    { icon: <IoLogoHtml5 className="text-7xl text-orange-400" />, name: 'HTML5' },
    { icon: <FaDatabase className="text-7xl" />, name: 'Databases' },
    { icon: <SiTailwindcss className="text-7xl text-blue-800" />, name: 'Tailwind CSS' },
    { icon: <SiMui className="text-7xl text-blue-400" />, name: 'Material UI' },
  ];

  const isSmallScreen = useMediaQuery({ maxWidth: 914 });


  const chunkSkills = (skills, size) => {
    const result = [];
    for (let i = 0; i < skills.length; i += size) {
      result.push(skills.slice(i, i + size));
    }
    return result;
  };

  const skillChunks = chunkSkills(skills, isSmallScreen ? 2 : 3);

  return (
    <section className='section' id='skills'>
      <div className='container mx-auto '>
    
    <motion.div  variants={fadeIn("up", 0.3)}
     initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.3}}  className="container border-b border-neutral-800 pb-24 mt-30 mx-auto">
      <motion.h1
  variants={fadeIn("up", 0.3)}
  initial="hidden"
  whileInView={"show"}
  
  viewport={{ once: false, amount:0.3 }}
  className="h2 text-accent  text-center mb-20 h-20"
>
   Skills
</motion.h1>
      {/* <motion.h1  variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }} className="sm:-mt-10 text-[50px] font-bold leading-[0.8] lg:text-[60px] mb-40 text-center ">Skills</motion.h1> */}
      <Carousel 
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop
        autoPlay
        interval={2000}
        stopOnHover={false}
        swipeable={true}
        emulateTouch={true}
      >
        {skillChunks.map((chunk, index) => (
          <div key={index} className="flex justify-center gap-20">
            {chunk.map((skill, skillIndex) => (
              <div
                key={skillIndex}
                className="flex flex-col items-center justify-center rounded-2xl  p-4"
              >
                {skill.icon}
                <p className="mt-2 text-center text-white">{skill.name}</p>
              </div>
            ))}
          </div>
        ))} 
      </Carousel>
    </motion.div>
    </div>
    
    </section>
  );
};

export default Technologies;


