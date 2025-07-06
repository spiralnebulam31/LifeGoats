const Parallax = () => {
  const sectionStyle = {
    backgroundImage: `url('/assets/parallax/life-goats-walking-mountain.webp')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  return (
    <section id="parallax" style={sectionStyle} className="bg-gradient-to-b from-background via-blue-100 to-blue-400 bg-contain lg:bg-cover 
    bg-no-repeat bg-fixed relative w-screen h-screen pt-10 inset-0 overflow-hidden z-10">
      <div className="relative w-screen h-full">
        <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center mx-auto">
          <h1 className="w-[90%] md:w-[75%] lg:w-[60%] text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-background
          font-bold font-body text-center drop-shadow-lg text-shadow-lg leading-8">
          “Give the ones you love wings to fly, roots to come back and reasons to stay.”
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Parallax;