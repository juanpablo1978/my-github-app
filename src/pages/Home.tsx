

const Home = () => {
  return (
    <main className="min-h-screen bg-blue-950 flex justify-center items-center flex-col">
     
        <h1 className="text-white text-[45px] lg:text-[85px] font-bold mt-[110px]
        leading-[50px] lg:leading-[95px] text-center max-w-[400px] lg:max-w-[1400px]">
          Build and ship software on a
            <br />
             single, collaborative platform</h1>
             <h3 className="text-white text-[26px] my-7 font-medium text-center mt-12
             mb-4 max-w-[330px] lg:max-w-[1400px]">
                Join the world’s most widely adopted AI-powered developer platform.
             </h3>
              <article className=" flex flex-col lg:flex-row flex-wrap justify-center items-center">
                <div>
              <input type="text" className="bg-white text-[22px] text-gray-900 w-[358px] h-[115px]
              lg:h-[69px] lg:w-[670px] rounded-md pl-3 relative pb-16 mt-6"
              placeholder="Enter your email"/>
              <button className="w-[346px] h-[57px] lg:w-[229px] lg:h-[62px] bg-green-700 text-white 
              font-semibold text-[22px] rounded-md absolute right-[22px] bottom-[126px]
               lg:right-[975px] lg:bottom-[245px]">
                Sign up for GitHub
                </button>
                </div>
              <button className="w-[357px] lg:w-[229px] h-[64px] bg-indigo-950 text-white font-semibold
               text-[22px]
               rounded-md border-2 border-white mt-4">Try GitHub Copilot</button>
              </article>
              
        </main>
  )
}

export default Home