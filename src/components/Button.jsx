import React from 'react'

function Button({children, version}) {
  return (
    <button className={`${version === 'secondary' ? 'bg-ash-light text-black hover:bg-cream-light' : 'bg-black text-cream-light hover:bg-[#8C8C8C]'} rounded-xl w-full py-3 text-center text-lg uppercase tracking-[2px] hover:cursor-pointer hover:bg-white`}>{children}</button>
  )
}

export default Button