import { motion } from 'framer-motion';
import parse, { domToReact } from 'html-react-parser';

const transform = (node) => {
  if (node.type === 'tag' && node.name === 'a') {
    return (
      <a href={node.attribs.href} className="font-links cursor-pointer underline hover:text-secondary">
        {domToReact(node.children)}
      </a>
    );
  }
  // Return null for all other nodes, which tells html-react-parser to use the default conversion
  return null;
};

const TeamCard = ({ index, alt, image, title, text, url, yMoving }) => {
  return (
    <motion.div
      className="w-[280px] lg:w-[350px] h-[450px] lg:h-[550px] z-0 bg-background m-3 py-5 rounded-2xl shadow-lg opacity-80 overflow-hidden"
      >
        <img
          src={image}
          alt={alt}
          className="flex justify-center mx-auto w-52 h-52 object-cover rounded-full"
        />
        <div className="px-6 pt-3 pb-1 flex flex-col mx-auto">
        <a href={url} target="_blank" rel="noreferrer">
          <h2 className="text-tertiary hover:text-earth font-subtitle underline cursor-pointer text-center text-[18px] font-bold max-w-6xl pt-2 pb-1">
            {title}
          </h2>
        </a>
          <p className="text-primary font-body text-center text-[16px] md:text-[18px] max-w-6xl pt-2 pb-1">
          {parse(text, { replace: transform })}
          </p>
        </div>
      </motion.div>
  );
};

export default TeamCard;
