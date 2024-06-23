import "primereact/resources/themes/lara-light-cyan/theme.css";
import { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { motion } from "framer-motion";
import {
    floatFromDownPreTitle,
    floatFromDownMainTitle,
  } from "../../../../motion/home-sections";
import { fadeIn } from "../../../../motion/motion";
import Axios from 'axios';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '960px',
            numVisible: 4
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        Axios.get('http://localhost:3000/images')
            .then(res => {
                setImages(res.data);
                setLoading(false);
            })
            .catch(err => {
                setError('Failed to fetch images');
                setLoading(false);
            });
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />
    }

    return (
        <section
            className="bg-background relative bg-cover bg-no-repeat w-full h-full inset-0 overflow-hidden pt-2 pb-12 z-10"
        >
        <motion.div
        className="text-center w-[80%] lg:w-[90%] mx-auto
        pt-8 mb-5 z-10 overflow-hidden"
      >
        <motion.p
          className="md:text-[18px] text-[14px] text-secondary font-subtitle
          font-bold uppercase tracking-wider"
          variants={floatFromDownPreTitle}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
        >
          Our Memories
        </motion.p>
        <motion.h2
          className="text-earth font-bold font-title uppercase md:text-[55px]
          sm:text-[45px] text-[40px] outline-background-2 pb-1 md:pb-4 mt-0"
          style={{ textShadow: "2px 2px 3px rgba(255,255,255, 0.3)" }}
          variants={floatFromDownMainTitle}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
        >
            Gallery
        </motion.h2>
      </motion.div>

        <motion.div className="flex justify-center items-center mx-auto">
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {!loading && !error && images.length === 0 && <div>No images available</div>}
            {!loading && !error && images.length > 0 &&
                <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={7} circular style={{ maxWidth: '800px' }}
                    item={itemTemplate} thumbnail={thumbnailTemplate} />
            }
        </motion.div>

        </section>
    );
}

export default Gallery;
