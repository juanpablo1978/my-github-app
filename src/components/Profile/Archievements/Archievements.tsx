

const Archievements = () => {
  return (
    <div className="text-white text-[16px] font-semibold py-4 lg:py-0 pl-3 lg:pl-7 lg:w-56">
    <h3 className="mb-3">Achievements</h3>
    <div  className="rounded-full w-[62px] h-[62px] lg:w-[68px] lg:h-[68px] object-cover
       border-[3px] border-gray-700 lg:mb-4">
      <img className="w-full h-full rounded-full object-cover"
       src="src/assets/insignia.png" alt="insignia" />
    </div>
    <div className="w-[33px] h-[22px] text-black bg-red-200 rounded-[12px] cursor-pointer
     flex justify-center items-center text-[11px] absolute left-[55px] top-96 lg:left-[264px] lg:top-[712px]">
      <p>x2</p>
    </div>
  </div>
  )
}

export default Archievements