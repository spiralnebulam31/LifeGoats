'use client';

import { motion } from "framer-motion";

const AdditionalCostsCard = ( { index, description, details }) => {
  return (
            <motion.div
            key={index}
            className="flex flex-col justify-center items-center mx-auto py-3 bg-background text-primary
            font-body md:text-[16px] text-[14px] w-[90%]"
            >
            <p className="text-center text-bold text-primary text-lg">➤ {description}</p>
            {details && <ul className="text-center text-bold text-primary text-lg">
            {details.map((details, index) => (
            <li key={index}>
            ↪ {details}
            </li>
            ))}
            </ul>}
            </motion.div>
  )
}

export default AdditionalCostsCard;
