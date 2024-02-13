function Navbar() {
  function handleClickScroll(idName){
    const sectionToScroll = document.getElementById(`${idName}`)

    sectionToScroll.scrollIntoView({behavior: 'smooth'})
  }

  function toggleMenu() {
    const hamburgerIcon = document.getElementById('menu-btn')
    const mobileMenu = document.getElementById('menu')
    hamburgerIcon.classList.toggle('open')
    mobileMenu.classList.toggle('flex')
    mobileMenu.classList.toggle('hidden')
  }

  return (
    <div className=" border-b-[5px] border-cream-dark">
      <div className="container py-6 px-5 w-full md:pt-8 md:pb-5 font-sans font-black text-2xl justify-between flex lg:flex-col items-center mx-auto lg:justify-center lg:space-y-3">
        <span className="uppercase tracking-[4px]">Focalpoint</span>
        <nav>
          <ul className="hidden space-x-10 text-sm text-ash-darkest uppercase font-bold lg:flex">
            <li onClick={() => handleClickScroll('home')} className="hover:text-black hover:cursor-pointer">Home</li>
            <li onClick={() => handleClickScroll('about')} className="hover:text-black hover:cursor-pointer">About</li>
            <li onClick={() => handleClickScroll('gallery')} className="hover:text-black hover:cursor-pointer">Gallery</li>
            <li onClick={() => handleClickScroll('testimonials')} className="hover:text-black hover:cursor-pointer">Testimonials</li>
            <li onClick={() => handleClickScroll('services')} className="hover:text-black hover:cursor-pointer">Services</li>
            <li onClick={() => handleClickScroll('contact')} className="hover:text-black hover:cursor-pointer">Contact</li>
          </ul>

          {/* Hamburger icon */}
          <div className="lg:hidden relative">
            <button id="menu-btn" onClick={toggleMenu} type="button" className="z-[100] block hamburger lg:hidden focus:outline-none">
              <span className={`hamburger-top bg-black`}></span>
              <span className={`hamburger-middle bg-black`}></span>
              <span className={`hamburger-bottom bg-black`}></span>
            </button>
          </div>
        </nav>

        <ul id="menu" onClick={toggleMenu} className={`text-white fixed font-bold z-[99] top-0 bottom-0 left-0 hidden flex-col w-full min-h-screen items-center font-sans space-y-5 uppercase text-2xl bg-black bg-opacity-70 lg:hidden` }>
        <li onClick={() => handleClickScroll('home')} className={`text-cream-light mt-40 hover:cursor-pointer hover:text-[#929191]`}>Home</li>
        <li onClick={() => handleClickScroll('about')} className={`text-cream-light hover:cursor-pointer hover:text-[#929191]`}>About</li>
        <li onClick={() => handleClickScroll('gallery')} className={`text-cream-light hover:cursor-pointer hover:text-[#929191]`}>Gallery</li>
        <li onClick={() => handleClickScroll('testimonials')} className={`text-cream-light hover:cursor-pointer hover:text-[#929191]`}>Testimonials</li>
        <li onClick={() => handleClickScroll('services')} className={`text-cream-light hover:cursor-pointer hover:text-[#929191]`}>Services</li>
        <li onClick={() => handleClickScroll('contact')} className={`text-cream-light hover:cursor-pointer hover:text-[#929191]`}>Contact</li>
      </ul>
      </div>
    </div>
  )
}

export default Navbar