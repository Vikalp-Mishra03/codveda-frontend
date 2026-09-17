import WorldMap from "../../assets/img/world-map.png";
import { motion } from "framer-motion";

const WhereToBuy = () => {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 10,
              delay: 0.2,
            }}
            className="text-4xl font-bold text-dark-gray"
          >
            Buy our Products from anywhere
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 10,
              delay: 0.4,
            }}
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
              className="input-style w-full "
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 10,
              delay: 0.6,
            }}
            className="flex items-center gap-4"
          >
            <input
              type="text"
              placeholder="Country"
              className="input-style w-full"
            />
            <input
              type="tex"
              placeholder="Zipcode"
              className="input-style w-full  lg:w-37.5"
            />
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 10,
              delay: 0.8,
            }}
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark duration-200 "
          >
            Order Now
          </motion.button>
        </div>
        <div className="col-span-2">
          <motion.img
            src={WorldMap}
            alt=""
            className="w-full sm:w-125 mx-auto"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default WhereToBuy;
