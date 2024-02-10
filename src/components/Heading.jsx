function Heading({title, subTitle, left}) {
  return (
    <div className={`mx-auto uppercase font-sans flex flex-col justify-center items-center ${left && 'lg:justify-start lg:items-start lg:mx-0'}`}>
      <span className="text-xl tracking-[1px]">{title}</span>
      <span className="text-3xl font-extrabold">{subTitle}</span>
    </div>
  )
}

export default Heading