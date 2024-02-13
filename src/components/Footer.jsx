import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="py-16 px-15 flex flex-col text-white justify-center font-sans bg-black items-center space-y-2">
      <span className="uppercase tracking-[4px] font-black text-xl">Focalpoint</span>
      <div className="flex space-x-3">
        <a href="https://www.facebook.com/" rel="noreferrer" target="_blank" className="w-fit">
          <FaFacebookSquare size={25} className="hover:cursor-pointer hover:text-ash-light" />
        </a>

        <a href="https://www.instagram.com/" rel="noreferrer" target="_blank" className="w-fit">
          <FaInstagram size={28} className="hover:cursor-pointer hover:text-ash-light" />
        </a>

        <a href="https://twitter.com/" rel="noreferrer" target="_blank" className="w-fit">
         <FaXTwitter size={25} className="hover:cursor-pointer hover:text-ash-light" />
        </a>
      </div>
      <span>{new Date().getUTCFullYear()} &copy; <span className="text-xs">RMFN</span></span>
    </footer>
  )
}

export default Footer