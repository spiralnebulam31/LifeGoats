import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const EventCard = ({ index, alt, image, link, title, text, yMoving }) => {

  return (
    <>
    <Link href={link} alt={title} target="_blank" rel="noreferrer">
    <motion.div
      className="w-[310px] h-[200px] lg:h-[250px] lg:w-[450px] z-0 bg-background m-3 rounded-2xl shadow-lg overflow-hidden"
      >
        <Image
          src={image}
          alt={alt}
          className="w-full object-cover"
          width={450}
          height={250}
        />
        </motion.div>        
      
      <div className="px-6 pt-1 pb-1 flex flex-col mx-auto w-[310px] h-auto lg:w-[450px]">
          <h2 className="text-tertiary font-subtitle text-center text-[20px] font-bold max-w-6xl pt-1 pb-1">
            {title}
          </h2>
          {/* <p className="text-primary font-body text-center text-[14px] md:text-[16px] max-w-6xl pt-2 pb-1">
            {text}
          </p> */}
        </div>
        </Link>
        </>
  );
};

export default EventCard;
