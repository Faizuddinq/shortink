import Header from '@/components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
        <main className=' min-h-screen container'>
            {/* headerr
            bodyy */}
            <Header/>
            <Outlet/>
        </main>

        {/* footerr */}
        <footer className=' p-10 text-white text-center bg-gray-700'>
          Made with love by Faiz
        </footer>
    </div>
  )
}

export default AppLayout