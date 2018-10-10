import {Action} from '@ngrx/store';

// Cargar Usuarios
export const CARGAR_USUARIOS = '[Usuarios] cargar usuarios';
export const CARGAR_USUARIOS_FAIL = '[Usuarios] cargar usuarios fail';
export const CARGAR_USUARIOS_SUCCESS = '[Usuarios] cargar usuarios success';

export class CargarUsuarios implements Action {
  readonly type = CARGAR_USUARIOS;
  constructor(){}
}

export class CargarUsuariosFail implements Action {
  readonly type = CARGAR_USUARIOS_FAIL;

  constructor(public payload: any){}
}

export class CargarUsuariosSuccess implements Action {
  readonly type = CARGAR_USUARIOS_SUCCESS;

  constructor(public usuarios: any[]){}
}

export type usuariosAcciones = CargarUsuarios |
CargarUsuariosFail |
CargarUsuariosSuccess;
