import Button from "./Button"
function PriceCard({price, hours, outfitNum, imgNum, letter}) {
  return (
    <div className="border-2 px-5 pb-10 pt-24 relative border-black rounded-3xl flex flex-col justify-center items-center font-sans">
      <div className="space-y-10 w-full">
        <div className="flex flex-col justify-center items-center space-y-5">
          <span className="font-extrabold text-5xl">${price}</span>
          <div className="space-y-4">
            <div className="border-b-2 py-2 px-10 font-medium text-lg text-ash-dark text-center border-ash-lightest">{hours} hours on location</div>
            <div className="border-b-2 py-2 px-10 font-medium text-lg text-ash-dark text-center border-ash-lightest">{outfitNum} outfit changes</div>
            <div className="border-b-2 py-2 px-10 font-medium text-lg text-ash-dark text-center border-ash-lightest">{imgNum} edited images</div>
          </div>
        </div>

        <Button>Avail</Button>
      </div>

      <div className="absolute top-5 left-5 rounded-full bg-black text-white text-xl py-3 px-5">{letter}</div>
    </div>
  )
}

export default PriceCard