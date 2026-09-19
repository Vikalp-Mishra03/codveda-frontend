import { motion } from "framer-motion";

import Coffee1 from "../../assets/img/coffee1.png";
import Coffee3 from "../../assets/img/coffee3.png";

const serviceData = [
  {
    id: 1,
    image: Coffee1,
    title: "Black Coffee",
    description:
      "Rich and bold coffee made from carefully selected beans.",
  },
  {
    id: 2,
    image: Coffee3,
    title: "Cold Coffee",
    description:
      "Smooth and refreshing coffee for every moment of the day.",
  },
  {
    id: 3,
    image: Coffee1,
    title: "Hot Coffee",
    description:
      "Freshly brewed coffee with a deep and satisfying flavor.",
  },
];

/* ================= SECTION ANIMATION ================= */

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/* ================= TEXT ANIMATION ================= */

const textVariants = {
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

/* ================= CARD ANIMATION ================= */

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Services = () => {
  return (
    <section className="bg-white px-6 py-20 text-gray-900 sm:px-8 lg:px-10">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: false,
          amount: 0.2,
        }}
        className="mx-auto max-w-[1200px]"
      >
        {/* ================= HEADING ================= */}
        <div className="text-3xl mx-auto mb-14 max-w-2xl  text-center">
          <motion.p
            variants={textVariants}
            className="
              mb-3
              text-xs
              font-medium
              uppercase
              tracking-[0.35em]
              text-primary
            "
          >
            Our Services
          </motion.p>

          <motion.h2
            variants={textVariants}
            className="
              text-3xl
              font-bold
              uppercase
              text-gray-900
              sm:text-4xl
              md:text-5xl
            "
          >
            Coffee For Every Mood
          </motion.h2>

          <motion.p
            variants={textVariants}
            className="
              mx-auto
              mt-4
              max-w-xl
              text-sm
              leading-7
              text-gray-600
              sm:text-base
            "
          >
            Discover our carefully crafted coffee selection,
            made with quality ingredients and a passion for
            great taste.
          </motion.p>
        </div>

        {/* ================= SERVICE CARDS ================= */}

        <motion.div
          variants={sectionVariants}
          className="
            grid
            grid-cols-1
            gap-8
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {serviceData.map((service) => (
            <motion.article
              key={service.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 18,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-gray-50
                p-6
                text-center
                shadow-sm
                transition-shadow
                duration-300
                hover:shadow-xl
              "
            >
              {/* ================= CARD GLOW ================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  -z-0
                  h-40
                  w-40
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-primary/10
                  blur-3xl
                "
              />

              {/* ================= IMAGE ================= */}

              <motion.div
                className="
                  relative
                  z-10
                  mx-auto
                  mb-6
                  flex
                  h-48
                  items-center
                  justify-center
                "
              >
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="
                    h-full
                    w-auto
                    object-contain
                    drop-shadow-xl
                  "
                  whileHover={{
                    scale: 1.12,
                    rotate: 3,
                    y: -5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 12,
                  }}
                />
              </motion.div>

              {/* ================= CONTENT ================= */}

              <motion.div
                variants={textVariants}
                className="relative z-10"
              >
                <h3
                  className="
                    text-xl
                    font-semibold
                    uppercase
                    text-gray-900
                    transition-colors
                    duration-300
                    group-hover:text-primary
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-gray-600
                  "
                >
                  {service.description}
                </p>
              </motion.div>

              {/* ================= BOTTOM LINE ================= */}

              <motion.div
                initial={{
                  scaleX: 0,
                }}
                whileHover={{
                  scaleX: 1,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  w-full
                  origin-left
                  bg-primary
                "
              />
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;