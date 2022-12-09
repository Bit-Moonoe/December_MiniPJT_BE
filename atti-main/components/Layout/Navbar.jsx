import Link from 'next/link'
import React from 'react'
const Navbar = () => {
  return (
    <nav className="bg-violet-900">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8" />
      <div className="relative flex items-center justify-between h-16">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          {/* <!-- Mobile menu button--> */}
          <button type="button" className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            {/* <!--
            Icon when menu is closed.
            Heroicon name: outline/bars-3
            Menu open: "hidden", Menu closed: "block"
          --> */}
            <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            {/* <!--
            Icon when menu is open.
            Heroicon name: outline/x-mark
            Menu open: "block", Menu closed: "hidden"
            --> */}
            <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
          <div className="flex items-center flex-shrink-0">
            <Link href="http://localhost:3000/" className="inline-flex items-center justify-center px-4 py-2 ml-3 mr-3 text-base font-extrabold text-gray-300 border border-transparent rounded-full shadow-sm whitespace-nowrap bg-violet-600 hover:bg-pink-300 hover:text-gray-600">
              아띠의 고민 상담소
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              <Link href="/Board" className="px-3 py-2 text-sm font-semibold text-gray-300 rounded-md hover:bg-pink-300 hover:text-white hover:font-extrabold">
                직업
              </Link>
              <Link href="/Board" className="px-3 py-2 text-sm font-semibold text-gray-300 rounded-md hover:bg-pink-300 hover:text-white hover:font-extrabold">
                대인관계
              </Link>
              <Link href="/Board" className="px-3 py-2 text-sm font-semibold text-gray-300 rounded-md hover:bg-pink-300 hover:text-white hover:font-extrabold">
                가족
              </Link>
              <Link href="/Board" className="px-3 py-2 text-sm font-semibold text-gray-300 rounded-md hover:bg-pink-300 hover:text-white hover:font-extrabold">
                연애
              </Link>
              <Link href="/Board" className="px-3 py-2 text-sm font-semibold text-gray-300 rounded-md hover:bg-pink-300 hover:text-white hover:font-extrabold">
                잡담
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

          <span className="sr-only">View notifications</span>
          {/* <!-- Heroicon name: outline/bell --> */}


          {/* <!-- Profile dropdown --> */}
          <div className="relative ml-3">

            {/* <!--
            Dropdown menu, show/hide based on menu state.
            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
            <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
              <Link href="/user/SignIn" className="block px-3 py-2 text-base font-bold text-gray-300 rounded-md hover:bg-pink-300 hover:text-white">
                Login
              </Link>
              <Link href="/user/SignUp" className="inline-flex items-center justify-center px-4 py-2 ml-3 mr-3 text-base font-bold text-gray-300 border border-transparent rounded-md shadow-sm whitespace-nowrap bg-violet-500 hover:bg-indigo-700 hover:text-white">
                Join
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. 모바일모드. 반응형으로 줄어들었을 때 사용 -->  */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <Link href="/Board" className="px-3 py-2 text-sm font-semibold text-gray-300 rounded-md hover:bg-pink-300 hover:text-white hover:font-extrabold">
            직업
          </Link>
          <Link href="/Board" className="px-3 py-2 text-sm font-semibold text-gray-300 rounded-md hover:bg-pink-300 hover:text-white hover:font-extrabold">
            대인관계
          </Link>
          <Link href="/Board" className="px-3 py-2 text-sm font-semibold text-gray-300 rounded-md hover:bg-pink-300 hover:text-white hover:font-extrabold">
            가족
          </Link>
          <Link href="/Board" className="px-3 py-2 text-sm font-semibold text-gray-300 rounded-md hover:bg-pink-300 hover:text-white hover:font-extrabold">
            연애
          </Link>
          <Link href="/Board" className="px-3 py-2 text-sm font-semibold text-gray-300 rounded-md hover:bg-pink-300 hover:text-white hover:font-extrabold">
            잡담
          </Link>
          <Link href="/user/SignIn" className="block px-3 py-2 text-base font-bold text-gray-300 rounded-md hover:bg-pink-300 hover:text-white">
            Login
          </Link>
          <Link href="/user/SignUp" className="inline-flex items-center justify-center px-4 py-2 ml-3 mr-3 text-base font-bold text-gray-300 border border-transparent rounded-md shadow-sm whitespace-nowrap bg-violet-500 hover:bg-indigo-700 hover:text-white">
            Join
          </Link>
        </div>
      </div>
    </nav >
  )
}
export default Navbar