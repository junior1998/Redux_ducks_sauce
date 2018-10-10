import * as fromCrudUsuario from '../actions';

export interface UsuarioEditado{
  user:any
}

const estadoInicial: UsuarioEditado = {
  user:''
};

export function usuarioEditadoReducer(state = estadoInicial,action:fromCrudUsuario.crudAcciones):UsuarioEditado {
  switch(action.type) {
    case fromCrudUsuario.EDITAR_USUARIO:
          return {
            ... state,
            user:action.usuario
          }

    case fromCrudUsuario.EDITAR_USUARIO_SUCCESS:
          return {
            ... state,
            user:action.usuario
          }

    case fromCrudUsuario.EDITAR_USUARIO_FAIL:
          return {
            ... state,
            user: action.payload
          }

    default:
      return state;
  }
}
