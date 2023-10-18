export interface IUsuario{
    nombre: string;
    apellido: string;
    email: string;
    username: string;
    password: string;
    direccion: string;
}

export interface IUsuarioLogin{
    user: string;
    pass: string;
}

export interface IUsuarioRegistro{
    user: string;
    pass: string;
    email: string;
}