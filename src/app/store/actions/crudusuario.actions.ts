import {Action} from '@ngrx/store';

// Crear Usuarios
export const CREAR_USUARIO = '[Usuario] crear usuario';
export const CREAR_USUARIO_FAIL = '[Usuario] crear usuarios fail';
export const CREAR_USUARIO_SUCCESS = '[Usuario] crear usuarios success';

// ========================
//  Crear usuario
// ========================
export class crearUsuario implements Action {
  readonly type = CREAR_USUARIO;
  constructor( public usuario:any ) { }
}

export class crearUsuarioFail implements Action {
  readonly type = CREAR_USUARIO_FAIL;

  constructor(public payload: any){}
}

// ========================
//  Editar usuario
// ========================
export const EDITAR_USUARIO = '[Usuario] editar usuario';
export const EDITAR_USUARIO_FAIL = '[Usuario] editar usuario fail';
export const EDITAR_USUARIO_SUCCESS = '[Usuario] editar usuario success';

export class EditarUsuario implements Action {
  readonly type = EDITAR_USUARIO;
  constructor(public id:string,public usuario:any){
    console.log('se ejecuto')
  }

}

export class EditarUsuarioFail implements Action {
    readonly type = EDITAR_USUARIO_FAIL;
    constructor(public payload:any){}
}

export class EditarUsuarioSuccess implements Action {
    readonly type = EDITAR_USUARIO_SUCCESS;
    constructor(public usuario:any){}
}




export type crudAcciones = crearUsuario |
                           crearUsuarioFail |
                           EditarUsuario |
                           EditarUsuarioFail |
                           EditarUsuarioSuccess;
// crearrUsuarioSuccess;
