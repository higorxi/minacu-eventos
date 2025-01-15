export interface Ingresso {
    tipo: string;
    preco: string;
    descricao: string;
  }
  
  export interface LocalInfo {
    nome: string;
    capacidade: string;
    estrutura: string[];
    acessibilidade: string;
  }
  
  export type TipoEvento = "privado" | "publico" | "particular"

  export interface Evento {
    id: string | number;
    nome: string;
    tipo: TipoEvento ;
    data: string;
    horario: string;
    local: string;
    descricao: string;
    imagens: string[];
    ingressos: Ingresso[];
    regras: string[];
    dicas: string[];
    localInfo: LocalInfo;
  }

  export interface BasicEventData {
    id: number;
    nome: string;
    categoria: string;
    data: string;
    local: string;
    tipo: TipoEvento;
  }

  export interface PrivateEventProps{
    evento: Evento
  }

  export interface PublicEventProps{
    evento: Evento
  }

  
  
  