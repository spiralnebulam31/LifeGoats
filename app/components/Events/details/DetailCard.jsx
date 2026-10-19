'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import PropTypes from 'prop-types';
import "@/src/scss/components/Events/details/Details.scss";

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
        <motion.div className="detail-card">
            <motion.div className="detail-card__icon-wrap">
                <Image
                    src={icon}
                    alt={alt}
                    className="detail-card__icon"
                    width={100}
                    height={100}                    
                />
            </motion.div>
            <motion.div className="detail-card__text-wrap">
                <p className="detail-card__name">
                    {name}
                </p>
                <p className="detail-card__value">
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
