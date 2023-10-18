import Categoria from './Categoria';
import Usuario from './UsuarioLogin';

export default interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  foto:string;
  categoria: Categoria | null;
  usuario: Usuario | null;
}