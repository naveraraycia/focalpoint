function Heading({title, subTitle, left, right, light}) {
  return (
    <div className={`mx-auto uppercase font-sans flex flex-col justify-center items-center ${right && 'lg:justify-end lg:items-end xl:mx-0'} ${left && 'xl:justify-start xl:items-start xl:mx-0'} ${light && 'text-white'}`}>
      <span className="text-xl tracking-[1px]">{title}</span>
      <span className="text-3xl font-extrabold">{subTitle}</span>
    </div>
  )
}

export default Heading