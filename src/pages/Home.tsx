

const Home = () => {
  return (
    <main className="min-h-screen bg-blue-950 flex justify-center items-center flex-col">
        <h1 className="text-white text-[85px] font-bold">Build and ship software on a
            <br />
             single, collaborative platform</h1>
             <h3 className="text-white text-[26px] my-7 font-medium">
                Join the world’s most widely adopted AI-powered developer platform.
             </h3>
              <article className="relative">
              <input type="text" className="bg-white text-[22px] text-gray-900 h-[69px] w-[670px]
               rounded-md pl-3 mr-80"
              placeholder="Enter your email"/>
              <button className="w-[229px] h-[62px] bg-green-700 text-white font-semibold text-[22px]
               rounded-md absolute right-[326px] bottom-[3px]">
                Sign up for GitHub
                </button>
              <button className="w-[229px] h-[68px] bg-indigo-950 text-white font-semibold text-[22px]
               rounded-md border-2 border-white absolute right-[70px] ">Try GitHub Copilot</button>
              </article>
              
        </main>
  )
}

export default Home