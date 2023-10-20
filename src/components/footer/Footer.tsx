import React from 'react'
import { Envelope, GithubLogo } from '@phosphor-icons/react'
import { Link } from 'react-router-dom';

function Footer() {
 
  

  return (
    <>
        <div className=" bg-[url('https://i.imgur.com/fIxZmd6.jpg')] opacity-95 flex justify-center text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl'>&copy; 2023 Raízes Livres | Copyright: </p>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
             <a href="https://github.com/Raizes-Livres" className="hover:underline text-white" target='_blank'> <GithubLogo size={48}/></a> 
             <Link to="/contato" className="hover:underline text-white">
             <Envelope size={48}/>
            </Link>
              
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer;