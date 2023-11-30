import { motion } from "framer-motion";
import { goatPrintSingle } from "../../../assets";

const Program = () => {
  return (
    <section
      id="program"
      className="bg-background
      relative bg-cover w-screen h-screen inset-0 left-0 right-0 bottom-0 top-0 pb-10
      overflow-hidden"
    >
      <motion.div
        className="text-start w-[80%] lg:w-[90%] mx-auto lg:mr-4 lg:ml-[13%] xl:ml-[13.4%]
        pt-6 mb-5 z-10 overflow-hidden"
      >
        <p
          className="md:text-[18px] text-[14px] text-secondary font-subtitle
          font-bold uppercase tracking-wider"
        >
          Details about the
        </p>
        <h2
          className="text-earth font-bold font-title uppercase md:text-[55px]
          sm:text-[45px] text-[40px] outline-background-2 pb-4 mt-0"
          style={{ textShadow: "2px 2px 3px rgba(0,0,0, 0.3)" }}
        >
          Program
        </h2>
      </motion.div>

      <motion.div className="mx-auto bg-gradient-to-b from-secondary via-tertiary to-earth p-2 m-3 w-[80%] lg:w-[45%] h-auto rounded-2xl shadow-lg">
        <div className="w-full flex flex-col justify-center items-center mx-auto py-4 bg-background rounded-2xl text-primary font-body md:text-[16px] text-[14px]">
          <p className="pb-5"> Stay tuned to find out more about: </p>
          <p> - The program </p>
          <p> - Accommodation options </p>
          <p> - Hiking information </p>
          <p className="pb-5">
            {" "}
            - Opportunities to contribute creatively to the program{" "}
          </p>
          <p> And more! </p>
          <p className="flex flex-wrap pt-5 font-bold uppercase font-subtitle md:text-[20px] text-[16px]">
            More information coming soon
          </p>
          <div className="flex flex-row mt-6">
          <img src={goatPrintSingle} alt="Goat Print" className="w-[20px] h-auto object-contain" />
          <img src={goatPrintSingle} alt="Goat Print" className="w-[20px] h-auto object-contain" />
          </div>
          <div className="flex flex-row justify-center items-center mb-5">
          <img src={goatPrintSingle} alt="Goat Print" className="w-[20px] h-auto object-contain" />
          <img src={goatPrintSingle} alt="Goat Print" className="w-[20px] h-auto object-contain" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Program;
