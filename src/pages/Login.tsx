import { FaGithub } from "react-icons/fa";

const Login = () => {
  return (
    <section className="min-h-screen text-black px-4 flex flex-col items-center">
        
        <div className="flex flex-col items-center mt-7 text-center my-4">
       <FaGithub className="cursor-pointer text-[45px] mb-4" />
       <h2 className="text-[24px] font-light text-gray-900">Sign in to GitHub</h2>
       </div>
       <form className="flex flex-col gap-y-4 border-[1px] border-gray-200 w-[300px] h-[300px]
       bg-gray-100 rounded-md p-5" action="">
        <div className="flex flex-col">
        <label className="text-gray-900 text-[14px] mb-[7px]" htmlFor="">Username or email address</label>
        <input className="w-[260px] h-[33px] bg-white rounded-md border-[1px] border-gray-300  " type="email " />
        </div>
        <div className="flex flex-col">
        <label className="text-gray-900 text-[14px] mb-[7px]" htmlFor="">Password</label>
        <input className="w-[260px] h-[33px] bg-white rounded-md border-[1px] border-gray-300 " type="password" />
        </div>
        <button className="w-[260px] h-[33px] bg-green-700 text-white rounded-md mt-5">
            Sign in
        </button>
       </form>
       <div className="text-center text-[12px] mt-24 text-gray-700">

        <ul className="flex flex-wrap gap-x-[14px] justify-center">
          <li>Terms </li>
          <li>Privacy</li>
          <li>Docs</li>
          <li>Contact GitHub Support</li>
          <li>Manage cookies </li>
          <li> Do not share my personal information</li>
        </ul>
      
       </div>
      
    </section>
  )
}

export default Login