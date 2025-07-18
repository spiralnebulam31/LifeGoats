'use client';

import "primereact/resources/themes/lara-light-cyan/theme.css";
import { useState } from 'react';
import { Galleria } from 'primereact/galleria';
import { motion } from "framer-motion";
import {
    floatFromDownPreTitle,
    floatFromDownMainTitle,
  } from "../../../../motion/home-sections";
import "./Gallery.css";
import Image from "next/image";
import PropTypes from 'prop-types';

const Gallery = ( { title, mainTitle, imagesArray } ) => {

    Gallery.propTypes = {
        title: PropTypes.string.isRequired,         
        mainTitle: PropTypes.string.isRequired,
        imagesArray: PropTypes.arrayOf(
            PropTypes.shape({
                src: PropTypes.string.isRequired,
                thumbnail: PropTypes.string.isRequired,
                alt: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
                location: PropTypes.string.isRequired,
            })
        ).isRequired,
    };

    const [images] = useState(imagesArray.map(img => ({
        itemImageSrc: img.src,
        thumbnailImageSrc: img.thumbnail,
        alt: img.alt,
        title: img.alt,
        date: img.date,
        location: img.location
    })));

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '960px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 4
        },
        {
            breakpoint: '560px',
            numVisible: 3
        }
    ];

    const itemTemplate = (item) => {
        return (
            <div style={{ height: '500px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                    <Image 
                        src={item.itemImageSrc} 
                        alt={item.alt} 
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'contain'
                        }} 
                        width={500}
                        height={500}
                    />
                </div>
                <div className="text-center mt-2">
                    <p>{item.date} - {item.location}</p>
                </div>
            </div>
        );
    }

    const thumbnailTemplate = (item) => {
        return (
            <div
            style={{ 
                width: '90px', 
                height: '75px', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                overflow: 'hidden'
                }}>
                <Image 
                    src={item.thumbnailImageSrc} 
                    alt={item.alt} 
                    style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover'
                    }} 
                    width={90}
                    height={75}
                />
            </div>
        );
    }

    return (
        <section className="bg-background relative bg-cover bg-no-repeat w-full h-full inset-0 overflow-hidden pt-2 pb-12 z-10">
            <motion.div className="text-center w-[80%] lg:w-[90%] mx-auto pt-8 mb-5 z-10 overflow-hidden">
                <motion.p
                    className="md:text-[18px] text-[14px] text-secondary font-subtitle font-bold uppercase tracking-wider"
                    variants={floatFromDownPreTitle}
                    initial="initial"
                    animate="animate"
                    viewport={{ once: true }}
                >
                    {title}
                </motion.p>
                <motion.h2
                    className="text-earth font-bold font-title uppercase md:text-[55px] sm:text-[45px] text-[40px] outline-background-2 pb-1 md:pb-4 mt-0"
                    style={{ textShadow: "2px 2px 3px rgba(255,255,255, 0.3)" }}
                    variants={floatFromDownMainTitle}
                    initial="initial"
                    animate="animate"
                    viewport={{ once: true }}
                >
                 {mainTitle}   
                </motion.h2>
            </motion.div>

            <motion.div className="flex justify-center items-center mx-auto">
                {images.length === 0 ? (
                    <div>No images available</div>
                ) : (
                    <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }} 
    item={itemTemplate} thumbnail={thumbnailTemplate} />
                )}
            </motion.div>
        </section>
    );
}

export default Gallery;