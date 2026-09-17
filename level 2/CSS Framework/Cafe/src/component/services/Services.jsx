import { motion } from "framer-motion";

import Coffee1 from "../../assets/img/coffee1.png";
import Coffee3 from "../../assets/img/coffee3.png";

const serviceData = [
  {
    id: 1,
    image: Coffee1,
    title: "Black Coffee",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    image: Coffee3,
    title: "Hot Coffee",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    image: Coffee1,
    title: "Cold Coffee",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];


// ================= CARD ANIMATION =================

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
    },
  },
};


// ================= CONTAINER ANIMATION =================

const containerVariants = {
  hidden: {
    opacity: 1,
  },

  visible: {
    opacity: 1,

    transition: {
      delay: 0.3,
      staggerChildren: 0.3,
    },
  },
};


const Services = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 sm:px-8 my-12 sm:my-16 space-y-8 sm:space-y-10">

      {/* ================= HEADING ================= */}

      <div className="text-center space-y-3 max-w-lg mx-auto">

        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
          className="text-3xl sm:text-4xl font-bold text-light-gray"
        >
          Fresh and{" "}
          <span className="text-primary">
            Tasty Coffee
          </span>
        </motion.h1>


        <motion.p
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.4,
          }}
          className="text-light-gray text-sm opacity-50 leading-6 px-2"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fuga vel cumque explicabo minima commodi dolores,
          possimus ab deserunt officia aperiam.
        </motion.p>

      </div>


      {/* ================= SERVICE CARDS ================= */}

      <div className="w-full">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}

          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-10
            sm:gap-8
            lg:gap-6
            w-full
          "
        >

          {serviceData.map((service) => (

            <motion.div
              key={service.id}
              variants={cardVariants}

              whileHover={{
                y: -8,
              }}

              transition={{
                type: "spring",
                stiffness: 250,
                damping: 15,
              }}

              className="
                text-center
                p-4
                sm:p-5
                space-y-5
                rounded-xl
                cursor-pointer
              "
            >

              {/* ================= COFFEE IMAGE ================= */}

              <motion.img
                src={service.image}
                alt={service.title}

                whileHover={{
                  scale: 1.08,
                  rotate: 2,
                }}

                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 12,
                }}

                className="
                  img-shadow2
                  w-48
                  sm:w-52
                  lg:w-56
                  max-w-full
                  mx-auto
                  cursor-pointer
                "
              />


              {/* ================= TEXT ================= */}

              <div className="max-w-62.5 mx-auto space-y-2">

                <h2 className="text-xl sm:text-2xl font-bold text-primary">
                  {service.title}
                </h2>

                <p className="text-dark-gray text-sm sm:text-base leading-6">
                  {service.subtitle}
                </p>

              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
};

export default Services;