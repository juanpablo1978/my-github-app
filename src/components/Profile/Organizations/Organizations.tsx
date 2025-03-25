

const Organizations = () => {
  return (
    <section className="text-white text-[16px] font-semibold py-4 lg:py-0 pl-3 lg:pl-7 lg:w-56">
    <h3 className="mb-[5px]">Organizations</h3>

    <article className="flex gap-x-[1px]">
  <a href="https://github.com/No-Country"><div  className="rounded-md w-[36px] h-[36px] object-cover
       border-[2px] border-gray-700 lg:mb-4">
      <img className="w-full h-full rounded-md object-cover"
       src="src/assets/no-country.png" alt="no country" />
    </div></a>  
  <a href="https://github.com/Aikodev-labs"> <div  className="rounded-md w-[36px] h-[36px]object-cover
       border-[2px] border-gray-700 lg:mb-4">
      <img className="w-full h-full rounded-md object-cover"
       src="src/assets/aiko.jpeg" alt="aiko" />
    </div></a> 
    </article>
  </section>
  )
}

export default Organizations