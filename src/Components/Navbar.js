import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <>
            <header>
                <nav className="bg-white border-gray-200 dark:bg-gray-900 h-auto sm:h-[10vh] fixed top-0 left-0 z-20 w-full ">
                    <div className="flex flex-wrap justify-between items-center min-w-full max-w-screen-xl p-4">
                        <Link href="/pages/Features">
                        <div className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"><span className='text-slate-600'>&#60;</span><span className="font-bold text-white">NU</span><span className="font-bold text-blue-500">VCA</span><span className='text-slate-600'>&#47;&#62;</span></div>
                        </Link>
                        <div className="flex items-center space-x-6 rtl:space-x-reverse">
                            <Link href="/pages/SignUp" className="text-md  text-blue-400 dark:text-blue-500 hover:underline">Sign Up</Link>
                            <Link href="/pages/Login" className="text-md  text-blue-400 dark:text-blue-500 hover:underline">Login</Link>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar
