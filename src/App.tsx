import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/login/Login'
import Cadastro from './pages/cadastro/Cadastro'
import Home from './pages/home/Home';
import Navbar from './components/navbar/NavBar';
import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';
import FormularioCategoria from './components/categorias/formularioCategoria/FormularioCategoria';
import { AuthProvider } from './contexts/AuthContext';
import DeletarCategorias from './components/categorias/deletarCategorias/DeletarCategorias';
import ListaProdutos from './components/produtos/listaProdutos/ListaProdutos';
import FormularioProduto from './components/produtos/formularioProdutos/FormularioProdutos';
import DeletarProduto from './components/produtos/deletarProduto/deletarProduto';
import Contato from './components/contato/Contato';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
       <>
       <AuthProvider>
       <ToastContainer />
       <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
              <Route path="/categorias/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategorias />} />
              <Route path="/produtos" element={<ListaProdutos />} />
              <Route path="/cadastroProduto" element={<FormularioProduto />} />
              <Route path="/editarProduto/:id" element={<FormularioProduto />} />
              <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
              <Route path="/contato" element={<Contato />} />





            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
  );
}

export default App;