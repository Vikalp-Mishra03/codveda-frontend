import WorldMap from "../../assets/img/world-map.png";
import { motion } from "framer-motion";

/* =========================
   CONTAINER ANIMATION
========================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/* =========================
   CONTENT ANIMATION
========================= */

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 70,
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

/* =========================
   MAP ANIMATION
========================= */

const mapVariants = {
  hidden: {
    opacity: 0,
    scale: 0.65,
    rotate: -3,
  },

  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const WhereToBuy = () => {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: false,
          amount: 0.2,
        }}
        className="grid grid-cols-1 place-items-center gap-8 sm:grid-cols-3"
      >
        {/* =========================
            FORM CONTENT
        ========================= */}

        <motion.div
          variants={containerVariants}
          className="space-y-4"
        >
          {/* Heading */}

          <motion.h1
            variants={contentVariants}
            className="text-4xl font-bold text-dark-gray"
          >
            Buy our Products from anywhere
          </motion.h1>

          {/* Name + Email */}

          <motion.div
            variants={contentVariants}
            className="flex items-center gap-4"
          >
            <input
              type="text"
              placeholder="Name"
              className="input-style w-full lg:w-37.5"
            />

            <input
              type="email"
              placeholder="Email"
              className="input-style w-full"
            />
          </motion.div>

          {/* Country + Zipcode */}

          <motion.div
            variants={contentVariants}
            className="flex items-center gap-4"
          >
            <input
              type="text"
              placeholder="Country"
              className="input-style w-full"
            />

            <input
              type="text"
              placeholder="Zipcode"
              className="input-style w-full lg:w-37.5"
            />
          </motion.div>

          {/* Order Button */}

          <motion.button
            variants={contentVariants}
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
            className="rounded-md bg-primary px-4 py-2 text-white duration-200 hover:bg-primary-dark"
          >
            Order Now
          </motion.button>
        </motion.div>

        {/* =========================
            WORLD MAP
        ========================= */}

        <div className="col-span-2">
          <motion.img
            src={WorldMap}
            alt="World map showing product availability"
            variants={mapVariants}
            whileHover={{
              scale: 1.03,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 15,
            }}
            className="mx-auto w-full sm:w-125"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default WhereToBuy;