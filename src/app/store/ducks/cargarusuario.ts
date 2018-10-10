// import {Action} from '@ngrx/store';

export const Type = {
  CARGAR_USUARIOS: '[Usuarios] cargar usuarios',
  CARGAR_USUARIOS_FAIL: '[Usuarios] cargar usuarios fail',
  CARGAR_USUARIOS_SUCCESS: '[Usuarios] cargar usuarios success'
}

export interface UsuariosState {
  users: any[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

const estadoInicial: UsuariosState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
};

export function usuariosReducer(state = estadoInicial, action) {
    switch(action.type){
      case Type.CARGAR_USUARIOS:
        return {
          ... state,
          loading: false,
          error: null
        }

      case Type.CARGAR_USUARIOS_SUCCESS:
        return {
          ... state,
          loading: false,
          loaded: true,
          users: [...action.payload.usuarios]
        }

      case Type.CARGAR_USUARIOS_FAIL:
        return {
          ... state,
          loaded: false,
          loading: false,
          error: {
            status: action.payload.status,
            message: action.payload.message,
            url: action.payload.url
          }
        };
      default:
        return state;
    }
}

export const CargarUsuariosConst = {
  CargarUsuarios: () => ({
    type: Type.CARGAR_USUARIOS,
  }),
  CargarUsuariosFail: (error:any) => ({
    type: Type.CARGAR_USUARIOS_FAIL,
    payload: {
      error
    }

  }),
  CargarUsuariosSuccess: (usuarios:any[]) => ({
    type: Type.CARGAR_USUARIOS_SUCCESS,
    payload: {
      usuarios
    }

  })

}
