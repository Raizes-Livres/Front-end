import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-green-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Raízes Livres</Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-white">Home</Link></li>
          <li><Link to="/produtos" className="text-white">Produtos</Link></li>
          <li><Link to="/categorias" className="text-white">Categorias</Link></li>
          <li><Link to="/login" className="text-white">Login</Link></li>
          <li><Link to="/contato" className="text-white">Contato</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;