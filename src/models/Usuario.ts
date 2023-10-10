import Produtos  from "./Produto";

export default interface Usuario {
    id: number;
    nome: string;
    email: string;
    foto: string;
    senha: string;
    ativo: boolean;
    produtos?: Produtos | null;
  }