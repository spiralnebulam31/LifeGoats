import { lifeGoatsWalkingMountain } from "../../../assets";

const Parallax = () => {
  const sectionStyle = {
    backgroundImage: `url(${lifeGoatsWalkingMountain})`,
    backgroundPosition: 'center',
  };

  return (
    <section id="parallax" style={sectionStyle} className="bg-background bg-contain lg:bg-cover bg-no-repeat bg-fixed relative w-screen h-screen pt-10 inset-0 overflow-hidden">
      <div className="relative w-screen h-full">
        <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-background font-bold font-links text-center">
            We are life goats!
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Parallax;