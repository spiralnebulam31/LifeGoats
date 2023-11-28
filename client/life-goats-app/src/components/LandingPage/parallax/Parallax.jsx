import { lifeGoats3 } from "../../../assets";

const Parallax = () => {
  return (
    <section id="parallax" className="bg-background relative bg-cover w-screen h-auto min-h-screen inset-0 left-0 right-0 bottom-0 top-0
      overflow-hidden">
       <div className="w-full mt-8 md:mt-2 lg:mt-1 xl:mt-0">
      <img src={lifeGoats3} alt="Life Goats" className="w-full h-auto object-contaain object-bottom z-40" />
    </div>
    </section>
  )
}

export default Parallax;
