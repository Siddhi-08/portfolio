import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import services from '../assets/services.png'

const education = [
  {
    Name: "Netaji Subhas University of Technology",
    Year: "December 2021 - July 2025",
    City: "New Delhi",
    Grade: "7.9 CGPA (till 6th Sem)",
  },

  {
    Name: "New Delhi Convent Sr. Sec. School",
    Year: "April 2020 - March 2021",
    City: "New Delhi",
    Grade: "84.4%",
  },
  {
    Name: "Sanjeevani Public  School",
    Year: "April 2018 - March 2019",
    City: "New Delhi",
    Grade: "92.4%",
  },
];

const Education = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div  variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }} className="flex-1  lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            
            <h2 className="h2 text-accent mb-10">Education</h2>
            <img className="lg:mb-20 hidden lg:flex flex-1 max-w-[300px] lg:max-w-[482px]" src={services} style={{height:'250px'}}/>
          </motion.div>
       <motion.div  variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }} className="flex-1 "> 
         <div>
          {education.map((edu,index)=>{
            const{Name,Year,City,Grade}=edu
             return(
              <div className="border-b border-white/20 h-[146px] mb-[38px] " key={index}>
                <div className="max-w-[476px]">
                  <h3 className="text-[20px] tracking-wider font-primary font-semibold mb-6 mt-10">
                    {Name}
                  </h3>
                  <p className="font-secondary leading-tight">{Year}</p>
                  </div>
                  <div>
                    <p>{City}</p>
                    <p>{Grade}</p>
                    </div>

                </div>

             )
          })}
         </div>
       </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
