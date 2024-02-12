function Heading({title, subTitle, left, light}) {
  return (
    <div className={`mx-auto uppercase font-sans flex flex-col justify-center items-center ${left && 'xl:justify-start xl:items-start xl:mx-0'} ${light && 'text-white'}`}>
      <span className="text-xl tracking-[1px]">{title}</span>
      <span className="text-3xl font-extrabold">{subTitle}</span>
    </div>
  )
}

export default Heading