import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <nav className="absolute left-0 right-0 top-0 z-50 w-full pt-7 sm:pt-8">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1500px]
          items-center
          justify-between
          px-6
          sm:px-8
          lg:px-10
          xl:px-12
        "
      >
        {/* ================= LOGO ================= */}

        <motion.h1
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="
            cursor-default
            text-xl
            font-semibold
            uppercase
            tracking-wide
            sm:text-2xl
          "
        >
          <span className="text-primary">Coders</span>{" "}
          Coffee.
        </motion.h1>

        {/* ================= MENU BUTTON ================= */}

        <motion.button
          type="button"
          aria-label={
            sidebarOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={sidebarOpen}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
            delay: 0.15,
          }}
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="
            flex
            h-11
            w-11
            cursor-pointer
            items-center
            justify-center
            rounded-full
            transition-colors
            hover:bg-white/10
          "
        >
          <motion.div
            animate={{
              rotate: sidebarOpen ? 90 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 15,
            }}
          >
            <GiHamburgerMenu className="text-3xl text-white" />
          </motion.div>
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;