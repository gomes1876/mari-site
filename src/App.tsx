import { useState } from 'react'
import { Icon } from '@iconify/react';
import Logo from './assets/logo.png';
import TextLogo from './assets/text-logo.png';
import './App.css'
import Icons from './icons';

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
      <div className='space-y-6'>

        <Icons
          link={'https://wa.me/5527998826438?text=Ol%C3%A1,%20tenho%20interesse%20em%20marcar%20uma%20consulta'}
          icon={<Icon icon="ri:whatsapp-fill" width={30} color='#522F0D' />}
          text="Whatsapp"
          clicked={clicked}
        />
        <Icons
          link={'https://www.instagram.com/mariana_odontologia/'}
          icon={<Icon icon="mdi:instagram" width={30} color='#522F0D' />}
          text="Instagram"
          clicked={clicked}
        />
        <Icons
          link={'https://maps.app.goo.gl/fqwWgzrdSaeW2mwJA'}
          icon={<Icon icon="mdi:location-radius" width={30} color='#522F0D' className='ml-[-0.5vh]' />}
          text="Local de atendimento"
          clicked={clicked}
        />
        <Icons
          link={'mailto:marianabg.odonto@gmail.com?subject=Agendar consulta&body=Gostaria de agendar uma consulta.'}
          icon={<Icon icon="material-symbols:mail" width={30} color='#522F0D' />}
          text="E-mail"
          clicked={clicked}
        />
      </div>

      <div className='mt-20' />

      <img src={TextLogo} className="w-76 h-18 self-end " />
    </div>
  )
}

export default App
