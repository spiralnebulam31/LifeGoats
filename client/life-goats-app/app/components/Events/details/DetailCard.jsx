'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import PropTypes from 'prop-types';

const DetailCard = ({ name, icon, alt, text, text2, initialNumber }) => {
    const [currentNumber, setCurrentNumber] = useState(initialNumber);
    const targetNumber = parseInt(text);

    useEffect(() => {
        if (!isNaN(targetNumber)) {
            const interval = setInterval(() => {
                setCurrentNumber(prevNumber => {
                    if (prevNumber < targetNumber) {
                        return prevNumber + 1;
                    } else {
                        clearInterval(interval); // Stop the interval when reaching the target
                        return prevNumber;
                    }
                });
            }, 100); // adjust speed as needed

            return () => clearInterval(interval);
        }
    }, [targetNumber]);

    return (
        <motion.div className="bg-transparent rounded-2xl flex justify-center items-center flex-col">
            <motion.div className="bg-background rounded-2xl flex justify-evenly items-center flex-row p-1  shadow-md">
                <Image
                    src={icon}
                    alt={alt}
                    className="w-18 lg:w-20 object-contain rounded-2xl hue-rotate-180 lg:h-20 p-2 mb-1"
                    width={100}
                    height={100}                    
                />
            </motion.div>
            <motion.div className="bg-transparent rounded-2xl flex justify-evenly items-center flex-col  px-4 lg:px-1 h-20">
                <p className="text-tertiary font-subtitle text-center text-[13px] lg:text-[14px] font-bold max-w-6xl -pt-1 -mb-4 px-4 h-10">
                    {name}
                </p>
                <p className="text-primary font-body font-bold flex flex-wrap text-center text-[15px] lg:text-[16px] w-22 lg:w-26 h-10 justify-center items-start mx-auto">
                    {isNaN(targetNumber) ? text : currentNumber}{text2}
                </p>
            </motion.div>
        </motion.div>
    );
}

DetailCard.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    text2: PropTypes.string,
    initialNumber: PropTypes.number.isRequired,
};

export default DetailCard;
