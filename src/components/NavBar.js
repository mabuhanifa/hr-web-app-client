import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <div className='flex justify-center items-center gap-x-20 p-5 bg-gray-900 text-gray-200'>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
        <Link to={'/login'}>
        <button className='bg-indigo-600 px-5 py-2 rounded'>
            Log In
          </button>
        </Link>
        <p>
          <button className='bg-red-600 px-5 py-2 rounded'>
            Log Out
          </button>
        </p>

      </div>
    </div>
  )
}

