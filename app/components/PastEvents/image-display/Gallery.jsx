'use client';

// Not used at the moment.

import "primereact/resources/themes/lara-light-cyan/theme.css";
import { useState } from 'react';
import { Galleria } from 'primereact/galleria';
import { motion } from "framer-motion";
import {
    floatFromDownPreTitle,
    floatFromDownMainTitle,
  } from "../../../../motion/home-sections";
import { mtOlympusMay2024Images } from '../../../../data/galleries/mt-olympus-may-2024';
import "@/src/scss/components/Events/image-display/Gallery.scss";
import Image from "next/image";

const Gallery = () => {
    const [images] = useState(mtOlympusMay2024Images.map(img => ({
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
                <div className="gallery__caption">
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
        <section className="gallery">
            <motion.div className="gallery__header">
                <motion.p
                    className="gallery__pretitle"
                    variants={floatFromDownPreTitle}
                    initial="initial"
                    animate="animate"
                    viewport={{ once: true }}
                >
                    Our Memories
                </motion.p>
                <motion.h2
                    className="gallery__title"
                    style={{ textShadow: "2px 2px 3px rgba(255,255,255, 0.3)" }}
                    variants={floatFromDownMainTitle}
                    initial="initial"
                    animate="animate"
                    viewport={{ once: true }}
                >
                    Gallery
                </motion.h2>
            </motion.div>

            <motion.div className="gallery__viewer">
                {images.length === 0 ? (
                    <div>No images available</div>
                ) : (
                    <Galleria id="past-event-gallery" value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }} 
    item={itemTemplate} thumbnail={thumbnailTemplate} />
                )}
            </motion.div>
        </section>
    );
}

export default Gallery;