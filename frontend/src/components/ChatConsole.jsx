import React from 'react'
import NavItem from './NavItem/NavItem'
import { Outlet } from 'react-router-dom'

const ChatConsole = () => {
  return (
   
    <section className="flex ">
    <header>
      <NavItem />
    </header>
    <main>
      <Outlet />
    </main>
     </section>

   
  )
}

export default ChatConsole