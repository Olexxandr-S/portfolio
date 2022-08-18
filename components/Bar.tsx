import { FunctionComponent } from "react";
import { ISkill } from "../types";
import { motion } from "framer-motion";

const Bar: FunctionComponent<{ data: ISkill }> = ({
  data: { Icon, name, level },
}) => {
  const barWidth = `${level}`;

  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: barWidth,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="text-white my-2 bg-gray-300 rounded-full dark:bg-dark-300">
      <motion.div
        className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green to-blue-600"
        style={{ width: level }}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div>
  );
};

export default Bar;
