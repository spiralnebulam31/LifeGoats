import { Hero, About, Program, Details, Location, Parallax, Contact } from "./";

const LandingPage = () => {
  return (
      <div className="bg-cover bg-n-repeat bg-center overflow-x-hidden">
        <Hero /> 
        <About />
        <Program />
        <Details />
        <Location />
        <Parallax />
        <Contact />
      </div>
  )
}

export default LandingPage;