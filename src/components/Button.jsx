import React from 'react'

function Button({children, version}) {
  return (
    <button type='button' className={`${version === 'secondary' ? 'bg-ash-light text-black hover:bg-cream-light' : 'bg-black text-cream-light hover:text-black hover:bg-transparent '} rounded-xl w-full py-3 text-center text-lg uppercase tracking-[2px] hover:cursor-pointer border-2 border-black`}>{children}</button>
  )
}

export default Button