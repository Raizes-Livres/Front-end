import React from 'react';
import { Link } from 'react-router-dom';
import Produto from '../../../models/Produto';

import './CardProduto.css'

interface CardProdutoProps {
  produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {
  return (
    <div>
      <div className='border-slate-900 border flex flex-col rounded overflow-hidden'>
        <div className="flex w-full bg-green-600 py-2 px-4 items-center gap-4">
          <img src={produto.usuario?.foto} className='h-12 rounded-full' alt="" />
          <h3 className='text-lg font-bold text-center uppercase '>{produto.usuario?.nome}</h3>
        </div>

        <div className="flex">
          <div className='p-4'>
            <img src={produto.foto} alt="" className='rounded fixed-image' />
          </div>
          <div className='p-4 flex flex-col'>
            <h4 className='text-lg font-semibold uppercase'>{produto.nome}</h4>
            <p>{produto.descricao}</p>
            <p>{produto.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
            <p>Categoria: {produto.categoria?.nome}</p>
          </div>
        </div>
        <div className="flex mt-auto">
          <Link to={`/editarProduto/${produto.id}`} className='w-full text-white bg-green-400 hover:bg-green-800 flex items-center justify-center py-2'>
            <button>Editar</button>
          </Link>
          <Link to={`/deletarProduto/${produto.id}`} className='text-white bg-red-400 hover-bg-red-700 w-full flex items-center justify-center'>
            <button>Deletar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardProduto;
