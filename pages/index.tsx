import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../animation";
import Head from "next/head";

const index = () => {
  return (
    <motion.div
      className="flex flex-col px-6 pt-1 flex-grow"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
    >
      <Head>
        <title>Web Developer | portfolio</title>
      </Head>
      <h6 className="my-3 font-medium">
        I am currently practicing front-end development and learning back-end in
        Node.js. Now I have no commercial web development experience, but I have
        completed several educational projects , using HTML, CSS, JavaScript,
        Bootstrap, Tailwind CSS, React.
      </h6>
      <div
        className="p-4 mt-5 bg-gray-400 flex-grow dark:bg-black"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 font-bold text-xl tracking-wide">What I Offer:</h6>
        <motion.div
          className="grid lg:grid-cols-2 gap-6"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              className="lg:col-span-1 bg-gray-200 rounded-lg dark:bg-dark-200"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;
