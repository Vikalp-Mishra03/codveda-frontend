import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <nav className="absolute top-0  pt-10 text-white w-[85%] z-20">
      <div className="container">
        <div className="flex justify-between items-center ">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="text-2xl font-semibold uppercase"
          >
            <span className="text-primary">Coders</span> Coffee.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.4,
            }}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <GiHamburgerMenu className="text-3xl coursor-pointer " />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
