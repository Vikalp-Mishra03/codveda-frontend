
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import bgImage from "../../assets/img/bg-slate.png";
import blackImage from "../../assets/img/black.png";
import Navbar from "../navBar/Navbar";

const Hero = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Main hero sequence
  const heroVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.15,
      },
    },
  };

  // Common content animation
  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-[#171c22] text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ================= NAVBAR ================= */}

      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* ================= HERO ================= */}

      <motion.div
        variants={heroVariants}
        initial="hidden"
        whileInView="visible"
        className="
          relative z-10 mx-auto grid min-h-screen w-full max-w-[1500px]
          grid-cols-1 items-center
          px-6 pb-12 pt-28
          md:grid-cols-[0.95fr_1.1fr_0.95fr]
          md:gap-2
          lg:px-10
          xl:gap-6
        "
      >
        {/* ================= LEFT CONTENT ================= */}

        <motion.div
          variants={contentVariants}
          className="
            relative z-10
            flex flex-col justify-center
            space-y-5
            md:pr-4
            lg:pr-8
          "
        >
          {/* Small heading */}

          <motion.p
            variants={contentVariants}
            className="
              text-xs font-medium uppercase
              tracking-[0.35em]
              text-primary
              sm:text-sm
            "
          >
            Premium Coffee
          </motion.p>

          {/* Main heading */}

          <motion.h1
            variants={contentVariants}
            className="
              text-5xl font-bold uppercase leading-[0.9]
              sm:text-6xl
              md:text-6xl
              lg:text-7xl
              xl:text-8xl
            "
          >
            Black
            <span className="block text-primary">Tumbler</span>
          </motion.h1>

          {/* Description */}

          <motion.div variants={contentVariants} className="max-w-md space-y-2">
            <p className="text-sm leading-6 text-gray-300 sm:text-base">
              Experience the perfect balance of rich coffee and modern design.
            </p>

            <p className="text-sm leading-6 text-gray-300 sm:text-base">
              Crafted for people who love their coffee wherever they go.
            </p>
          </motion.div>

          {/* Button */}

          <motion.div variants={contentVariants}>
            <motion.button
              type="button"
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.95,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
              className="
                mt-2
                rounded-full
                bg-primary
                px-7 py-3
                text-sm font-semibold
                text-black
                shadow-lg
                shadow-black/20
              "
            >
              Explore Coffee
            </motion.button>
          </motion.div>
        </motion.div>

        {/* ================= CENTER PRODUCT ================= */}

        <motion.div
          className="
            relative flex
            min-h-[430px]
            items-center
            justify-center
            md:min-h-[520px]
          "
        >
          {/* Large background word */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 0.08,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
              delay: 0.5,
              ease: "easeOut",
            }}
            className="
              absolute left-1/2 top-1/2
              -z-0
              -translate-x-1/2
              -translate-y-1/2
              whitespace-nowrap
              text-[75px]
              font-black
              uppercase
              tracking-tight
              sm:text-[95px]
              md:text-[105px]
              lg:text-[125px]
            "
          >
            Coffee
          </motion.div>

          {/* Decorative circle */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.35,
              type: "spring",
              stiffness: 90,
              damping: 14,
            }}
            className="
              absolute
              h-60 w-60
              rounded-full
              border border-primary/30
              sm:h-68 sm:w-68
              md:h-72 md:w-72
              lg:h-80 lg:w-80
            "
          />

          {/* Product */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.65,
              y: 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.25,
              type: "spring",
              stiffness: 90,
              damping: 14,
            }}
            className="relative z-10"
          >
            <motion.img
              src={blackImage}
              alt="Black Coders Coffee tumbler"
              className="
                w-52
                drop-shadow-[0_25px_35px_rgba(0,0,0,0.55)]
                sm:w-56
                md:w-60
                lg:w-68
                xl:w-72
              "
              whileInView={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>

        {/* ================= RIGHT CONTENT ================= */}

        <motion.div
          variants={contentVariants}
          className="
            relative z-10
            flex flex-col
            justify-center
            space-y-5
            md:items-end
            md:pl-4
            md:text-right
            lg:pl-8
          "
        >
          <motion.h2
            variants={contentVariants}
            className="
              text-2xl
              font-semibold
              uppercase
              sm:text-3xl
            "
          >
            Freshly Brewed
          </motion.h2>

          <motion.p
            variants={contentVariants}
            className="
              max-w-md
              text-sm
              leading-7
              text-gray-300
              sm:text-base
            "
          >
            Discover premium coffee crafted with carefully selected beans and a
            passion for every cup.
          </motion.p>

          {/* Social icons */}

          <motion.div
            variants={contentVariants}
            className="flex gap-4 md:justify-end"
          >
            <motion.a
              href="#"
              aria-label="Facebook"
              whileHover={{
                scale: 1.25,
                y: -4,
              }}
              whileTap={{
                scale: 0.9,
              }}
              className="cursor-pointer"
            >
              <FaFacebook className="text-lg" />
            </motion.a>

            <motion.a
              href="#"
              aria-label="Instagram"
              whileHover={{
                scale: 1.25,
                y: -4,
              }}
              whileTap={{
                scale: 0.9,
              }}
              className="cursor-pointer"
            >
              <FaInstagram className="text-lg" />
            </motion.a>

            <motion.a
              href="#"
              aria-label="Twitter"
              whileHover={{
                scale: 1.25,
                y: -4,
              }}
              whileTap={{
                scale: 0.9,
              }}
              className="cursor-pointer"
            >
              <FaTwitter className="text-lg" />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ================= SIDEBAR ================= */}

      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Dark overlay */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSidebarOpen(false)}
              className="
                fixed inset-0
                z-30
                bg-black/50
                backdrop-blur-sm
              "
            />

            {/* Sidebar */}

            <motion.aside
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 18,
              }}
              className="
                fixed right-0 top-0
                z-40
                flex h-full
                w-[280px]
                flex-col
                justify-center
                bg-[#1c2229]
                px-8
                shadow-2xl
              "
            >
              <motion.h2
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.2,
                }}
                className="mb-8 text-2xl font-semibold uppercase"
              >
                Follow Us
              </motion.h2>

              <div className="space-y-5">
                {[
                  {
                    icon: FaFacebook,
                    name: "Facebook",
                  },
                  {
                    icon: FaInstagram,
                    name: "Instagram",
                  },
                  {
                    icon: FaTwitter,
                    name: "Twitter",
                  },
                ].map(({ icon: Icon, name }, index) => (
                  <motion.a
                    href="#"
                    key={name}
                    initial={{
                      opacity: 0,
                      x: 30,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.3 + index * 0.1,
                    }}
                    whileHover={{
                      x: 8,
                    }}
                    className="
                      flex
                      items-center
                      gap-4
                      text-gray-300
                      transition-colors
                      hover:text-primary
                    "
                  >
                    <Icon className="text-xl" />
                    <span>{name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
