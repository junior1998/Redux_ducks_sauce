import * as fromCrudUsuario from '../actions';

export interface MostrarUsuario {
  user:any
}

const estadoInicial: MostrarUsuario = {
  user:''
};

export function MostrarUsuarioReducer(state = estadoInicial,action:fromCrudUsuario.usuarioAcciones):MostrarUsuario {
    switch(action.type){
      case fromCrudUsuario.CARGAR_USUARIO:
          return {
            ... state
          }
      case fromCrudUsuario.CARGAR_USUARIO_SUCCESS:
          return{
            ... state,
            user:{... action.usuario}
          }

      case fromCrudUsuario.CARGAR_USUARIO_FAIL:
          return{
            ... state,
            user: action.payload
          }

      default:
        return state
    }
}
