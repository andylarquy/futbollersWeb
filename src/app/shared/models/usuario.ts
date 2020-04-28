export interface UsuarioLogueado {
    nombre?: string;
    password?: string;
}

export class Usuario {
    id: string;
    nombre: string;
    password: string;
    apellido: string;
    sexo :  String;
    posicion: String;
    email : String;
    lat : number;
    lon: number;
}