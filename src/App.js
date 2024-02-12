import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import Button from "./components/Button";
import hero from './assets/imgs/hero.jpg'
import hero2 from './assets/imgs/g12.jpg'
import about from './assets/imgs/about.jpg'
import g1 from './assets/imgs/g1.jpg'
import g2 from './assets/imgs/g2.jpg'
import g3 from './assets/imgs/g3.jpg'
import g4 from './assets/imgs/g4.jpg'
import g5 from './assets/imgs/g5.jpg'
import g6 from './assets/imgs/g6.jpg'
import g7 from './assets/imgs/g7.jpg'
import g8 from './assets/imgs/g8.jpg'
import g9 from './assets/imgs/g9.jpg'
import g10 from './assets/imgs/g10.jpg'
import g11 from './assets/imgs/g11.jpg'
import g12 from './assets/imgs/g12.jpg'
function App() {
  return (
    <>
      <div id='home'>
        <Navbar/>

        <div className="container py-6 px-5 w-full mb-8 mx-auto font-sans flex flex-col-reverse xl:flex-row xl:justify-between md:py-16 xl:py-16">
        <div className="flex flex-col mt-16 xl:flex-col-reverse xl:mt-0">
            <div className="flex flex-col space-y-5 items-center xl:items-start">
              <Heading title={'Capture the'} subTitle={'Essence of you'} left={true} />

              <p className="text-center leading-[158%] text-lg max-w-lg xl:text-left">Specializing in portrait photography, we dive deep into the art of storytelling through the lens, focusing on the subtleties that make each person uniquely themselves. We believe in creating photographs that do more than showcase.</p>

              <div className="w-[300px]">
                <Button>Explore</Button>
              </div>
            </div>

            <div className="rounded-3xl border-2 border-black p-5 flex flex-col space-y-3 md:space-y-0 md:space-x-5 justify-center items-center mt-16 md:flex-row xl:mb-8 xl:mt-0">
              <img src={hero2} alt="photography-hero" className="object-cover object-center sm:h-[400px] md:w-1/2 rounded-xl xl:h-[100px]" />
              <div className="flex flex-col justify-center items-center md:items-start">
                <span className="font-extrabold text-lg uppercase">Photography</span>
                <p className="leading-[158%] max-w-sm text-center md:text-left xl:text-sm xl:max-w-xs">Highlighting the unique approach and philosophy behind your portrait photography.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-4 font-sans justify-center items-center xl:items-start xl:w-3/6">
            <h1 className="font-extrabold text-3xl uppercase text-center md:text-left"><span className="xl:block">reveal</span> your inner light</h1>
            <img src={hero} alt="hero-img" className="object-center object-cover h-[250px] w-full rounded-xl md:h-[500px] xl:h-full" />
          </div>

         
          
        </div>
      </div>

      <div id="about">
        <div className="container py-6 px-5 w-full mb-8 mx-auto font-sans flex flex-col items-center justify-center space-y-24 md:py-16 xl:py-16 lg:flex-row-reverse lg:justify-between">
          <div className="space-y-12 lg:w-3/6">
            <div className="space-y-5">
              <Heading title={'Few Things'} subTitle={'About us'} />

              <p className="text-center leading-[158%] text-lg xl:text-justify">At <span className="uppercase font-extrabold">Focalpoint</span>, we believe that photography is more than just taking pictures—it's about creating a space where you can be yourself, celebrate your individuality, and immortalize the moments that matter most. Our approach is personal, our style is unique, and our commitment is to deliver timeless portraits that you and your loved ones will cherish forever.</p>
            </div>

            <div className="space-y-12 flex flex-col max-w-lg mx-auto lg:mx-0">
              <div className="flex justify-center items-center space-x-6">
                {/* Circle */}
                <div className="rounded-full py-[9.5px] px-5 bg-black text-white text-lg">
                  1
                </div>

                {/* Paragraph group */}
                <div className="space-y-3">
                  <h2 className="uppercase font-extrabold text-2xl">Our Process</h2>
                  <p className="leading-[158%] text-justify">We begin with a personal consultation to understand your vision and preferences. Whether you're seeking a classic portrait, a family keepsake, or a creative expression of your personality, we tailor every aspect of the session to suit your need</p>
                </div>
              </div>
            </div>

            <div className="space-y-12 flex flex-col max-w-lg lg:ml-32 mx-auto">
              <div className="flex justify-center items-center space-x-6">
                {/* Circle */}
                <div className="rounded-full py-[11px] px-5 bg-black text-white text-lg">
                  2
                </div>

                {/* Paragraph group */}
                <div className="space-y-3">
                  <h2 className="uppercase font-extrabold text-2xl">Our Promise</h2>
                  <p className="leading-[158%] text-justify">Our promise to you is not just in delivering stunning portraits, but in creating lasting impressions that grow more valuable with time. Using the finest materials and the latest techniques, we ensure that your portraits are not only beautiful but are also timeless treasures.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-black p-5 pb-10 flex flex-col space-y-10 justify-center items-center">
              <img src={about} alt="photography-hero" className="object-cover object-center rounded-xl h-[400px] w-full" />
              <div className="flex flex-col text-white">
                <span className="font-extrabold text-lg uppercase">Rooted in Authenticity</span>
                <p className="leading-[158%] max-w-sm xl:text-sm">Our goal is to reveal the unguarded, the natural, and the true essence of every individual we photograph.</p>
              </div>
          </div>

        </div>
      </div>

      <div id="gallery">
        <div className="container py-6 px-5 w-full mb-8 mx-auto font-sans md:py-16 xl:py-16">
          <div className="space-y-5">
            <div className="space-y-5">
              <Heading title={'our'} subTitle={'Gallery'} />

              <p className="text-center mx-auto leading-[158%] max-w-lg text-lg">highlighting the essence of your portrait photography as both an art form and a narrative medium</p>
            </div>

            <div className="grid grid-cols-2 grid-rows-9 gap-5 lg:grid-cols-3 lg:grid-rows-5">
              <img src={g1} alt="gallery-1" className="object-cover object-center rounded-xl w-full h-full xl:row-span-2" />
              <img src={g2} alt="gallery-2" className="object-cover object-center rounded-xl w-full h-full" />
              <img src={g3} alt="gallery-1" className="object-cover object-center rounded-xl w-full h-full xl:row-span-2" />
              <img src={g4} alt="gallery-2" className="object-cover object-center rounded-xl w-full h-full" />
              <img src={g12} alt="gallery-1" className="object-cover object-center rounded-xl w-full h-full xl:row-span-1" />
              <img src={g6} alt="gallery-2" className="object-cover object-center rounded-xl w-full h-full" />
              <img src={g5} alt="gallery-1" className="object-cover object-center rounded-xl w-full h-full xl:row-span-1" />
              <img src={g7} alt="gallery-2" className="object-cover object-center rounded-xl w-full h-full" />
              <img src={g9} alt="gallery-1" className="object-cover object-center rounded-xl w-full h-full xl:row-span-2" />
              <img src={g10} alt="gallery-2" className="object-cover object-center rounded-xl w-full h-full" />
              <img src={g11} alt="gallery-1" className="object-cover object-center rounded-xl w-full h-full xl:row-span-1" />
              <img src={g8} alt="gallery-2" className="object-cover object-center rounded-xl w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
