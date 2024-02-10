import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import Button from "./components/Button";
import hero from './assets/imgs/hero.jpg'
import hero2 from './assets/imgs/g12.jpg'
function App() {
  return (
    <>
      <div id='home' className="bg-cream-light">
        <Navbar/>

        <div className="container py-6 px-5 w-full mb-8 mx-auto font-sans flex flex-col-reverse lg:flex-row lg:justify-between md:py-16 lg:space-x-16 xl:px-32 lg:py-16">
        <div className="flex flex-col mt-16 lg:flex-col-reverse lg:mt-0">
            <div className="flex flex-col space-y-5 items-center lg:items-start">
              <Heading title={'Capture the'} subTitle={'Essence of you'}left={true} />

              <p className="text-center leading-[158%] text-lg max-w-lg lg:text-left">Specializing in portrait photography, we dive deep into the art of storytelling through the lens, focusing on the subtleties that make each person uniquely themselves. We believe in creating photographs that do more than showcase.</p>

              <div className="w-[300px]">
                <Button>Explore</Button>
              </div>
            </div>

            <div className="rounded-3xl border-2 border-black p-5 flex flex-col space-y-3 md:space-y-0 md:space-x-5 justify-center items-center mt-16 md:flex-row lg:mb-8 lg:mt-0">
              <img src={hero2} alt="photography-hero" className="object-cover object-center sm:h-[400px] md:h-[150px] md:w-1/2 rounded-xl lg:h-[100px]" />
              <div className="flex flex-col justify-center items-center md:items-start">
                <span className="font-extrabold text-lg uppercase">Photography</span>
                <p className="leading-[158%] max-w-sm text-center md:text-left lg:text-sm lg:max-w-xs">Highlighting the unique approach and philosophy behind your portrait photography.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-4 font-sans justify-center items-center lg:items-start">
            <h1 className="font-extrabold text-3xl uppercase text-center md:text-left"><span className="lg:block">reveal</span> your inner light</h1>
            <img src={hero} alt="hero-img" className="object-center object-cover h-[250px] w-full rounded-xl md:h-[500px] lg:h-[300px]" />
          </div>

         
          
        </div>
      </div>
    </>
  );
}

export default App;
