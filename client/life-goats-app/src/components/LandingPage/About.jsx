import { motion } from 'framer-motion';
import { aboutText } from '../../constants/constants';

const About = () => {
  return (
    <section id="about" className="overflow-hidden bg-gradient-to-b from-background via-[#96beeb] to-[#2F6FB7] relative bg-cover w-full h-screen top-0 left-0 right-0 bottom-0 pt-5 pb-10">
      
      <motion.div className="text-start w-[80%] lg:w-[90%] mx-auto lg:mr-4 lg:ml-[15%]
        pt-6 mb-5 z-10 overflow-hidden">
          <p className="md:text-[18px] text-[14px] text-secondary font-subtitle
          font-bold uppercase tracking-wider">
            Maria's reflections
          </p>
          <h2 className="text-earth font-bold font-title uppercase md:text-[55px]
          sm:text-[45px] text-[40px] outline-background-2 pb-4 mt-0"
          style={{ textShadow: "2px 2px 3px rgba(0,0,0,0.3)" }}>
            About The Retreat
          </h2>
        </motion.div>

        <motion.div className="flex flex-col justify-center items-center mx-auto bg-gradient-to-b from-secondary via-tertiary to-earth p-2 m-3 w-[55%] rounded-2xl shadow-card">
        <div className="w-full h-auto py-4 bg-background rounded-2xl">
        {aboutText.map((text) => (
          <div key={text.index} className="w-full px-10 py-3">
            {text.paragraph && <p className="md:text-[16px] text-[14px] font-body text-primary">{text.paragraph}</p>}
            {text.endText && <p className="md:text-[18px] text-[16px] font-bold font-body text-primary">{text.endText}</p>}
          </div>
        ))}
        </div>
        </motion.div>



    </section>
  )
}

export default About
