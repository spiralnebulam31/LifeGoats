import { motion } from "framer-motion";

const RouteLinksDisplay = ( { routeLinks } ) => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto mb-3 gap-6 w-[90%] lg:w-[80%]">
          <motion.h2 className="text-xl font-subtitle font-bold text-tertiary mb-1">
        The Stops
      </motion.h2>
      <div className="flex flex-col lg:flex-row justify-center items-center mx-auto w-[85%] mb-4">
        {routeLinks.map((link) => (
            <div key={link.id} className="flex flex-col justify-center items-center text-center mx-auto w-full mb-6 lg:mb-4">
            <a
                href={link.link}
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer text-primary font-links font-bold text-md ml-2 hover:underline hover:text-secondary"
            >
            <img src={link.photo} alt={link.alt} className="w-40 h-auto" />
                {link.title}
            </a>
            </div>
        ))}
      </div>
    </div>
  )
}

export default RouteLinksDisplay
