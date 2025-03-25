

const CardPopularRepos = () => {
  return (
   <article className="w-[335px] h-[120px] lg:w-[435px] border-[1px] border-gray-500 rounded-md p-4">
    <div className="flex justify-between mb-3">
        <h3 className="text-blue-500 font-normal text-[15px]">
            react-movies
        </h3>
        <h4 className="text-[11px] border-[1px] border-gray-500 rounded-[12px] font-semibold px-[6px] py-[1px]">
            Public
        </h4>
    </div>
    <p className="mb-3 text-[13px]">Una app de pelícuas con React + Vite</p>

    <div className="flex items-center gap-x-1">
    <span className="w-3 h-3 bg-yellow-300 rounded-full inline-block"></span><p className="text-[13px]">JavaScript</p>
    </div>

   </article>
  )
}

export default CardPopularRepos