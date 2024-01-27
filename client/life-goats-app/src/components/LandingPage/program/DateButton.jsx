const DateButton = ({ date, isActive, onClick }) => {
  return (
    <div>
    {!isActive ? (
      <button
        className="text-primary bg-background font-body font-bold uppercase text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 
        py-1 px-2 rounded-2xl drop-shadow-2xl my-2 mx-4 hover:bg-secondary hover:text-background hover:drop-shadow-lg"
        onClick={onClick}
      >
        {date}
      </button>
    ) : (
      <button
        className="text-earth bg-tertiary font-body font-bold uppercase text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 
        outline-background-2 py-1 px-2 rounded-2xl my-2 mx-4 hover:bg-tertiary hover:text-earth hover:drop-shadow-lg"
        onClick={onClick}
      >
        {date}
      </button>
    )}
    </div>
  )
}

export default DateButton
