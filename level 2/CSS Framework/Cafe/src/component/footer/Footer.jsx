import { FaFacebook, FaGoogle, FaInstagram, FaPhone, FaTelegram } from "react-icons/fa";
import creditCards from "../../assets/img/credit-cards.webp";
import { FaMapLocation } from "react-icons/fa6";
import {motion} from 'framer-motion'

const Footer = () => {
  return (
    <div className="bg-linear-to-r from-primary to-primary-dark pt-12 pb-8 text-white mt-10">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <motion.div
          initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once:true, amount:0.5}}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 10,
              delay: 0.2,
              duration: 0.6,
            }}
          className="space-y-6">
            <h1 className="text-3xl font-bold uppercase ">coders cafe.</h1>
            <p className="text-sm max-w-75 ">
              Lorem ipsum dolor sit amet, adipisicing elit. Voluptas ex facilis,
              ipsa repellendus iure odit odio error sequi expedita blanditiis.
            </p>
            <div>
              <p className="flex items-center gap-2 mt-2">
                <FaPhone />
                +91 123 456 7890
              </p>
              <p className="flex items-center gap-2 mt-2">
                <FaMapLocation /> Ramnagar, Nainital
              </p>
            </div>
          </motion.div>
          <motion.div 
          initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once:true, amount:0.5}}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 10,
              delay: 0.4,
              duration: 0.6,
            }}
          className="space-y-6">
            <h1 className="text-3xl font-bold">Quick Links</h1>
            <div className="grid grid-cols-2 gap-3 ">
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div 
          initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once:true, amount:0.5}}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 10,
              delay: 0.6,
              duration: 0.6,
            }}
          className="space-y-6">
            <h1 className="text-3xl font-bold">Follow Us</h1>
            <div className="flex items-center gap-3">
              <FaFacebook className="text-3xl hover:scale-105 duration-300"/>
              <FaInstagram className="text-3xl hover:scale-105 duration-300"/>
              <FaTelegram className="text-3xl hover:scale-105 duration-300"/>
              <FaGoogle className="text-3xl hover:scale-105 duration-300"/>
            </div>
            <div>
              <h1 className="text-xl mb-2 font-semibold">Payment Methods</h1>
              <img src={creditCards} alt="" className="w-[80%]"/>
            </div>
          </motion.div>
        </div>
        <p className="text-white text-center mt-8 pt-8 border-t-2">
          Copyright &copy; 2026 Coders Cafe. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
