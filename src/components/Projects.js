// import React from "react";
// import { motion } from "framer-motion";
// import { fadeIn } from "../variants";
// import img1 from "../assets/img1.jpg";
// import img2 from "../assets/img2.jpg";
// import img3 from "../assets/img3.png";
// import img4 from "../assets/img4.png";
// import img5 from "../assets/img5.jpg";

// const Projects = () => {
//   return (
//     <section className="section" id="projects">
//       <div className="container mx-auto">
//         <div className="flex flex-col lg:flex-row gap-x-12">
//           <motion.div      variants={fadeIn("left", 0.3)}
//               initial="hidden"
//               whileInView={"show"}
//               viewport={{ once: false, amount: 0.7 }} className="flex-1 flex flex-col gap-y-10 mb-10 lg:mb-0">
//             <div>
//               <h2 className=" h2 leading-tight text-accent">
//                 My <br /> Projects
//               </h2>
//               <p className="max-w-sm mb-16">
//              I've developed dynamic web applications that provide seamless user experiences. I've built various applications with API integration and asynchronous features. 
//               </p>
//               <button className="btn btn-sm mb-20">
//                 <a
//                   href="https://github.com/Siddhi-08?tab=repositories"
//                   target="_blank"
//                 >
//                   View All Projects 
//                 </a>
//               </button>
//             </div>
//             {/* image */}
//             <div className="mt-4 group relative overflow-hidden border-2 border-white/50 rounded-xl">
//               {/* overlay */}
//               <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
//               <div
//                 className="h-72 bg-cover bg-center"
//                 style={{ backgroundImage: `url(${img1})` }}
//               ></div>

//               <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
//                 <span className="text-3xl text-white mt-10">E-commerce Website</span>
//                 <p> HTML , CSS , Javascipt , Express.js , Node.js , News API , React.js API Integration , MUI , JWT , Bcypt , Authentication , Payment Gateway , Tailwind CSS</p>
//               </div>
//             </div> 
           
            
//           </motion.div>
//           <motion.div      variants={fadeIn("right", 0.3)}
//               initial="hidden"
//               whileInView={"show"}
//               viewport={{ once: false, amount: 0.7 }} className="mt-8 flex-1 flex flex-col gap-y-10">
            
//             <div className="mt-20 group relative overflow-hidden border-2 border-white/50 rounded-xl">
//               {/* overlay */}
//               <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
//               <div
//                 className="h-72 bg-cover bg-center"
//                 style={{ backgroundImage: `url(${img2})` }}
//               ></div>

//               <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
//                 <span className="text-3xl text-white">News-App</span>
//                 <p> HTML , CSS , Javascipt , Express.js , Node.js , News API , React.js <br/> API Integration </p>
//               </div>
//             </div>
//             <div className="mt-10 group relative overflow-hidden border-2 border-white/50 rounded-xl">
//               {/* overlay */}
//               <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
//               <div
//                 className="h-72 bg-cover bg-center"
//                 style={{ backgroundImage: `url(${img3})` }}
//               ></div>

//               <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
//                 <span className="text-3xl text-white">Weather App</span>
//                 <p> HTML , CSS , Javascipt , Express.js , Node.js , Weather API </p>
//               </div>
//             </div>
            
           
//           </motion.div>
          
         
            
//         </div>
        
//       </div>
      
//     </section>
//   );
// };

// export default Projects;



import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.jpg";

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-12">
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 flex flex-col gap-y-10 mb-10 lg:mb-0"
          >
            <div className="mt-10 gap-y-20">
              <h2 className="h2 leading-tight text-accent">
                My <br /> Projects
              </h2>
              <p className="max-w-sm mb-8">
                I've developed dynamic web applications that provide seamless user experiences. I've built various applications with API integration and asynchronous features.
              </p>
              <button className="btn btn-sm mb-8">
                <a
                  href="https://github.com/Siddhi-08?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View All Projects
                </a>
              </button>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl mb-5 mt-2">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <div
                className="h-72 bg-cover bg-center"
                style={{ backgroundImage: `url(${img1})` }}
              ></div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                <span className="text-3xl text-white">E-commerce Website</span>
                <p>HTML, CSS, JavaScript, Express.js, Node.js, News API, React.js, API Integration, MUI, JWT, Bcrypt, Authentication, Payment Gateway, Tailwind CSS</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 flex flex-col gap-y-20"
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl mt-20">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <div
                className="h-72 bg-cover bg-center"
                style={{ backgroundImage: `url(${img2})` }}
              ></div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-3xl text-white">News-App</span>
                <p>HTML, CSS, JavaScript, Express.js, Node.js, News API, React.js, API Integration</p>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl -mt-5">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <div
                className="h-72 bg-cover bg-center"
                style={{ backgroundImage: `url(${img3})` }}
              ></div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-3xl text-white">Weather App</span>
                <p>HTML, CSS, JavaScript, Express.js, Node.js, Weather API</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
