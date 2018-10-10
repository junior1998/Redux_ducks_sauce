import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './cargarusuario';

export interface AppState {
    usuarios: reducers.UsuariosState;
    // crearusuario: reducers.UsuarioNuevo;
    // MostrarUsuarioById: reducers.MostrarUsuario;
    // EditarUsuario: reducers.UsuarioEditado;
}

export const appReducers: ActionReducerMap<AppState> = {
  usuarios: reducers.usuariosReducer,
  // crearusuario: reducers.usuarioNuevoReducer,
  // MostrarUsuarioById: reducers.MostrarUsuarioReducer,
  // EditarUsuario: reducers.usuarioEditadoReducer
};
