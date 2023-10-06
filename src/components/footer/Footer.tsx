import React from 'react'
import { Envelope, GithubLogo } from '@phosphor-icons/react'

function Footer() {
 
  

  return (
    <>
        <div className="flex justify-center bg-green-500 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl'>&copy; 2023 Raízes Livres | Copyright: </p>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
              <GithubLogo size={48}/>
              <Envelope size={48}/>
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer;