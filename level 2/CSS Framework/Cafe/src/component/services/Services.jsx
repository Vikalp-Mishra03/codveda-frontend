import { motion } from "framer-motion";
import Coffee1 from "../../assets/img/coffee1.png";
import Coffee3 from "../../assets/img/coffee3.png";
const serviceData = [
  {
    id: 1,
    image: Coffee1,
    title: "Black Coffee",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    image: Coffee3,
    title: "Hot Coffee",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    image: Coffee1,
    title: "Cold Coffee",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
      ease: "easeInOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.4,
    },
  },
};

const Services = () => {
  return (
    <div className="container my-16 space-y-4">
      <div className="text-center space-y-2 max-w-lg mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
          className="text-4xl font-bold"
          text-light-gray
        >
          Fresh and <span className="text-primary">Tasty Coffee</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.4,
          }}
          className="text-light-gray text-sm opacity-50"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga vel
          cumque explicabo minima commodi dolores, possimus ab deserunt officia
          aperiam.
        </motion.p>
      </div>
      <div className="flex justify-center w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.8 }}
          className="flex items-center justify-center gap-8  w-full"
        >
          {serviceData.map((service) => (
            <motion.div 
              key={service.id}
              className="text-center p-4 space-y-6 "
              variants={cardVariants}
            >
              <img
                src={service.image}
                alt={service.title}
                className="img-shadow2 max-w-50 mx-auto hover:scale-110 duration-300 cursor-pointer"
              />
              <div className="max-w-62.5 mx-auto space-y-2">
                <h1 className="text-2xl font-bold text-primary">
                  {service.title}
                </h1>

                <p className="text-dark-gray">{service.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
