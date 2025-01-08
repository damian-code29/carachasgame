// linajes de la fauna y los personajes.
export type linaje = "lagartijas" | "culebras" | "sapos" | "hormigas" | "gusanos";


//interfaces
interface caracteristicasPersonaje {
  vida: number;
  ataqueBase: number;
  defensaBase: number;
  experiencia: number;
  vitalidad: number;
  carisma: number;
  enfoque: number;
  fuerza: number;
  chiripa: number;
  agilidad: number;
}

export interface userInterface {
  name: string;
  password: string;
  mail: string;
}

export interface characterInterface {
  name: string;
  level: number;
  linaje: linaje;
  caracteristicas: caracteristicasPersonaje;
}

interface caracteristicasMob {
  vida: number;
  ataque: number;
  defensa: number;
}

interface item {
  nombre: string;
  descripcion: string;
  cantidad: number;
  valor: number;
}

interface botin {
  experiencia: number;
  items: item[];
}

//constantes
const caracteristicasIniciales: caracteristicasPersonaje = {
  vida: 100,
  ataqueBase: 1,
  defensaBase: 1,
  experiencia: 0,
  vitalidad: 0,
  carisma: 0,
  enfoque: 0,
  fuerza: 0,
  chiripa: 0,
  agilidad: 0,
};


// clases


export class Usuario implements userInterface {
  constructor(
    public name: string,
    public password: string,
    public mail: string
  ) {}
}

export class Character implements personajeInterface {
  caracteristicas: caracteristicasPersonaje;
  level:number;
  constructor(
    public name: string,
    public linaje: linaje
  ) {
    this.level = 0;
    this.caracteristicas = caracteristicasIniciales;
  }
}

export class Mob {
  constructor(
    public nombre: string,
    public nivel: number,
    public linaje: linaje,
    public botin: botin,
    public caracteristicas?: caracteristicasMob
  ) {
    this.caracteristicas = { vida: 1, ataque: 5, defensa: 5 };
  }
}
