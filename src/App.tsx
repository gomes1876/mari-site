import { useState } from 'react'
import { Icon } from '@iconify/react';
import Logo from './assets/logo.png';
import TextLogo from './assets/text-logo.png';
import './App.css'

function App() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }

  return (
    <div
      className="
          flex flex-col  w-screen h-screen 
          bg-brown-300 items-center p-10
          "
    >
      <img src={Logo} className="w-20 h-20 mb-12" />

      <div
        className={`
            flex justify-between flex-row items-center 
            px-6 b  border-2  
            w-[40vh] h-12 hover:bg-brown-400
            ${clicked ? 'bg-brown-100' : 'border-brown-500'} 
            transition duration-500 ease-in-out
            `}>
        <Icon icon="ri:whatsapp-fill" width={30} color='#522F0D' />
        <span className='text-brown-500 font-semibold'>Whatsapp</span>

      </div>
      <img src={TextLogo} className="w-76 h-18 self-end" />
    </div>
  )
}

export default App
