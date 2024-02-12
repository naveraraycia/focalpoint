function TestimonialCard({img, name, number, description}) {
  return (
    <div className="rounded-xl bg-transparent relative text-white border-2 font-sans border-ash-darkest p-5 flex justify-center items-center space-x-5 max-w-lg">
      <div className="space-y-1">
        <span className="uppercase font-extrabold text-xl">{name}</span>
        <p className="leading-[158%] text-sm">{description}</p>
      </div>

      <img src={img} alt="testomonial-img" className="object-center object-cover rounded-lg w-[200px] h-[200px]" />

      <div className="hidden bg-black absolute rounded-full border-8 border-white text-white px-5 py-3 -top-6 -right-6 md:block">{number}</div>
    </div>
  )
}

export default TestimonialCard