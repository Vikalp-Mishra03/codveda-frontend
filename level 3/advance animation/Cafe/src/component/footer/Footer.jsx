import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { motion } from "framer-motion";

import creditCards from "../../assets/img/credit-cards.webp";

/* =========================
   FOOTER CONTAINER
========================= */

const footerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

/* =========================
   COLUMN ANIMATION
========================= */

const columnVariants = {
  hidden: {
    opacity: 0,
    y: 80,
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
   COPYRIGHT ANIMATION
========================= */

const copyrightVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      delay: 0.2,
    },
  },
};

const Footer = () => {
  return (
    <div className="bg-linear-to-r from-primary to-primary-dark pt-12 pb-8 text-white mt-10">
      <div className="mx-auto w-full max-w-7xl px-4">

        {/* =========================
            FOOTER COLUMNS
        ========================= */}

        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.3,
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >

          {/* =========================
              COMPANY
          ========================= */}

          <motion.div
            variants={columnVariants}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold uppercase">
              coders cafe.
            </h1>

            <p className="text-sm max-w-75">
              Lorem ipsum dolor sit amet, adipisicing elit.
              Voluptas ex facilis, ipsa repellendus iure odit
              odio error sequi expedita blanditiis.
            </p>

            <div>
              <motion.p
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 mt-2"
              >
                <FaPhone />
                +91 123 456 7890
              </motion.p>

              <motion.p
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 mt-2"
              >
                <FaMapLocation />
                Ramnagar, Nainital
              </motion.p>
            </div>
          </motion.div>

          {/* =========================
              QUICK LINKS
          ========================= */}

          <motion.div
            variants={columnVariants}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">
              Quick Links
            </h1>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <ul className="space-y-2">
                  <motion.li whileHover={{ x: 6 }}>
                    Home
                  </motion.li>

                  <motion.li whileHover={{ x: 6 }}>
                    About
                  </motion.li>

                  <motion.li whileHover={{ x: 6 }}>
                    Contact Us
                  </motion.li>

                  <motion.li whileHover={{ x: 6 }}>
                    Privacy Policy
                  </motion.li>
                </ul>
              </div>

              <div>
                <ul className="space-y-2">
                  <motion.li whileHover={{ x: 6 }}>
                    Home
                  </motion.li>

                  <motion.li whileHover={{ x: 6 }}>
                    About
                  </motion.li>

                  <motion.li whileHover={{ x: 6 }}>
                    Contact Us
                  </motion.li>

                  <motion.li whileHover={{ x: 6 }}>
                    Privacy Policy
                  </motion.li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* =========================
              SOCIAL / PAYMENT
          ========================= */}

          <motion.div
            variants={columnVariants}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">
              Follow Us
            </h1>

            {/* Social Icons */}

            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  rotate: 5,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
                className="cursor-pointer"
              >
                <FaFacebook className="text-3xl" />
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  rotate: -5,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
                className="cursor-pointer"
              >
                <FaInstagram className="text-3xl" />
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  rotate: 5,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
                className="cursor-pointer"
              >
                <FaTelegram className="text-3xl" />
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  rotate: -5,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
                className="cursor-pointer"
              >
                <FaGoogle className="text-3xl" />
              </motion.div>
            </div>

            {/* Payment Methods */}

            <div>
              <h1 className="text-xl mb-2 font-semibold">
                Payment Methods
              </h1>

              <motion.img
                src={creditCards}
                alt="Available payment methods"
                className="w-[80%]"
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: false,
                  amount: 0.5,
                }}
                whileHover={{
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* =========================
            COPYRIGHT
        ========================= */}

        <motion.p
          variants={copyrightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.8,
          }}
          className="text-white text-center mt-8 pt-8 border-t-2"
        >
          Copyright &copy; 2026 Coders Cafe. All rights reserved.
        </motion.p>
      </div>
    </div>
  );
};

export default Footer;