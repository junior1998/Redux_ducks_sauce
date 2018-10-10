import {Action} from '@ngrx/store';

// Cargar Usuarios
export const CARGAR_USUARIO = '[Usuario] cargar usuario';
export const CARGAR_USUARIO_FAIL = '[Usuario] cargar usuarios fail';
export const CARGAR_USUARIO_SUCCESS = '[Usuario] cargar usuarios success';

export class CargarUsuario implements Action {
  readonly type = CARGAR_USUARIO;
  constructor( public id: string ) { }
}

export class CargarUsuarioFail implements Action {
  readonly type = CARGAR_USUARIO_FAIL;

  constructor(public payload: any){}
}

export class CargarUsuarioSuccess implements Action {
  readonly type = CARGAR_USUARIO_SUCCESS;

  constructor(public usuario: any){}
}

export type usuarioAcciones = CargarUsuario |
CargarUsuarioFail |
CargarUsuarioSuccess;
