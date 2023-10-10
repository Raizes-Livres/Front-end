import Produtos  from "./Produto";

export default interface Categoria {
    id: number;
    nome: string;
    ativo: boolean;
    produtos?: Produtos | null;
  }