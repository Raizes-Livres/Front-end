import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('click', closeMenu);
    } else {
      document.removeEventListener('click', closeMenu);
    }

    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [isMenuOpen]);

  const handleButtonClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    toggleMenu();
  };
  
  const handleMenuClick: React.MouseEventHandler<HTMLUListElement> = (e) => {
    e.stopPropagation();
  };

  const textShadowStyle = {
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' 
  };

  return (
    <nav style={{ background: 'linear-gradient(to right, rgb(16, 185, 129), rgb(101, 163, 13))', backgroundClip: 'text', color: 'transparent' }} className="py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold" style={textShadowStyle}>
          Raízes Livres
        </Link>

        <button
          className={`lg:hidden text-white ${isMenuOpen ? 'hidden' : ''}`}
          onClick={handleButtonClick}
        >
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 5H21V7H3V5ZM3 11H21V13H3V11ZM3 17H21V19H3V17Z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21 5H3V7H21V5ZM21 11H3V13H21V11ZM21 17H3V19H21V17Z"
              />
            )}
          </svg>
        </button>

        <ul
          ref={menuRef}
          className={`lg:flex space-x-5 ${isMenuOpen ? 'block' : 'hidden'}`}
          onClick={handleMenuClick}
        >
          <li>
            <Link to="/" className="hover:underline text-white" style={textShadowStyle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/produtos" className="hover:underline text-white" style={textShadowStyle}>
              Produtos
            </Link>
          </li>
          <li>
            <Link to="/categorias" className="hover:underline text-white" style={textShadowStyle}>
              Categorias
            </Link>
          </li>
          <li>
            <Link to="/CadastroCategoria" className="hover:underline text-white" style={textShadowStyle}>
              Cadastrar Categorias
            </Link>
          </li>
          <li>
            <Link to="/CadastroProduto" className="hover:underline text-white" style={textShadowStyle}>
              Cadastrar Produtos
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:underline text-white" style={textShadowStyle}>
              Login
            </Link>
          </li>
          <li>
            {/* <Link to="/contato" className="hover:underline text-white">
              Contato
            </Link> */}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
