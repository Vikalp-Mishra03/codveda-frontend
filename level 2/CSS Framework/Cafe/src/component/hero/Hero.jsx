import { useState } from "react";
import BgImage from "../../assets/img/bg-slate.png";
import coffeeMain from "../../assets/img/black.png";
import Navbar from "../navBar/Navbar";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <main style={bgImage}>
      <section className="relative min-h-187.5 w-full">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-8">
          {/* Navbar Section */}
          <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* hero section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-212.5">
            {/* text content  */}
            <div className="text-light-orange mt-25 md:mt-[-45%] p-4 space-y-28">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="text-7xl font-bold leading-tight ml-14"
              >
                Black <br /> Tumbler
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="relative"
              >
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Black Lifestyle.</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </h1>
                </div>
                <div className="absolute -top-6 -left-10 w-62.5 h-47.5 bg-gray-700/25"></div>
              </motion.div>
            </div>

            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                src={coffeeMain}
                alt=""
                className="relative z-40 h-100 md:h-125 md:mt-[-45%] img-shadow"
              />
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="h-45 w-45 absolute top-[-20%] -right-16 border-primary rounded-full z-10 border-20"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="absolute -top-20 left-50 z-1 "
              >
                <h1 className="text-[140px] scale-150 font-bold text-dark-gray/40 leading-none ">
                  Black Tumble
                </h1>
              </motion.div>
            </div>
          </div>

          {sidebarOpen && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="absolute top-0 right-0 w-1/4 h-full bg-linear-to-b from-primary/80 to-primary-dark/80 backdrop-blur-sm z-10"
            >
              <div className="w-full h-full flex justify-center items-center">
                <div className=" flex flex-col justify-center items-center text-white gap-6">
                  <div className="w-px h-17.5 bg-amber-50"></div>
                  <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                    <FaFacebookF className="text-2xl " />
                  </div>
                  <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                    <FaTwitter className="text-2xl " />
                  </div>
                  <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                    <FaInstagram className="text-2xl " />
                  </div>
                  <div className="w-px h-17.5 bg-amber-50"></div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
        
      </section>
    </main>
  );
};

export default Hero;
