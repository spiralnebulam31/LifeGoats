import { heroBackground } from "../../assets";

const Hero = () => {
  return (
    <div>
      <h1>Hero</h1>
      <img src={heroBackground} alt="hero" className="absolute inset-0 w-full h-auto object-cover object-center z-[-1]"/>
    </div>
  )
}

export default Hero;
