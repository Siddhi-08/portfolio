import { React } from "react";

import Image from "../assets/profile.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useState } from "react";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center lg:-mt-15"
      id="home"
    >
      <div className='"container mx-auto'>
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 ">
          <div className="flex-1 text-center font-secondary lg:text-left -mb-40 lg:mb-4">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" sm:-mt-10 text-[55px] font-bold leading-[0.8] lg:text-[80px] mb-6"
            >
              Hello I'm Siddhi <span>Jha</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[40px]  font-secondary
        font-semibold uppercase leading-[1]"
            >
              <span className=" text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "MERN Developer",
                  200,
                  "Problem Solver",
                  200,
                  "React Developer",
                  200,
                ]}
                speed={50}
                className="text-accent"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p variants={fadeIn('up',0.5)} initial="hidden" whileInView={'show'} viewport={{once:false , amount:0.7}} className="mb-8 max-w-lg mx-auto lg:mx-0">
            With a year of experience in the MERN stack (MongoDB, Express.js, React, Node.js), I've developed dynamic web applications that provide seamless user experiences. I've built various applications with API integration and asynchronous features. The projects involved developing a smooth and secure user interface, efficient data handling, and real-time updates.
            </motion.p>
            <motion.div variants={fadeIn('up',0.6)} initial="hidden" whileInView={'show'} viewport={{once:false , amount:0.7}} className="flex max-w-max items-center mb-12 mx-auto lg:mx-0">
              <a href="https://drive.google.com/file/d/1M_LPUZ2qYJbOvfExjS3B5za6VaGEfLbL/view">
                <button className="btn btn-lg">Resume</button>
              </a>
            </motion.div>
          </div>
          <motion.div variants={fadeIn('down',0.5)} initial="hidden" whileInView={'show'}  className="lg:mb-20 hidden lg:flex flex-1 max-w-[300px] lg:max-w-[482px] ">
            <img
              style={{
                height: "700px",
                
              }}
              src={Image}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
