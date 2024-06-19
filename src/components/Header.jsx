
import { FaHome } from "react-icons/fa";

function Header() {
  return (
    <div className='flex flex-row bg-yellow-00 h-10 w-full'>
        <div 
            className='flex-auto bg-slate-00 text-stone-100 text-3xl px-2 font-serif underline w-3/4 hidden sm:block'
            >
                <h1 className='bg-red-00'>NEW</h1>
            </div>

            <div className='flex-auto bg-slate-00 w-auto text-stone-100 text-4xl px-3 py-1 font-serif sm:hidden '>
                <h1 className=""><FaHome/></h1>
            </div>
        
    </div>
  )
}

export default Header