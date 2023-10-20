import React from 'react';
import { Envelope, GithubLogo } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import img6 from '../../assets/img6.png';

function Footer() {
  const textShadowStyle = {
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
  };

  const footerStyle = {
    background: `url(${img6}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    opacity: 0.95,
  };

  return (
    <div style={footerStyle} className="flex justify-center text-white">
      <div className="container flex flex-col items-center py-4">
        <p className="text-xl" style={textShadowStyle}>&copy; 2023 Raízes Livres | Copyright:</p>
        <p className="text-lg" style={textShadowStyle}>Acesse nossas redes sociais</p>
        <div className="flex gap-2">
          <a href="https://github.com/Raizes-Livres" className="hover:underline text-white" target="_blank">
            <GithubLogo size={48} />
          </a>
          <Link to="/contato" className="hover:underline text-white">
            <Envelope size={48} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
