import * as fromCrudUsuario from '../actions';

export interface UsuarioNuevo {
  user: {
    nombre: string;
    correo: string;
    password: string;
    usuario: string;
    imagen: string;
  }
}

const estadoInicial: UsuarioNuevo = {
    user: {
      nombre: '',
      correo: '',
      password: '',
      usuario: '',
      imagen: ''
    }
};

export function usuarioNuevoReducer(state = estadoInicial, action: fromCrudUsuario.crudAcciones):UsuarioNuevo {
    switch(action.type){
      case fromCrudUsuario.CREAR_USUARIO:
        return {
          ... state
        }

        case fromCrudUsuario.CREAR_USUARIO_FAIL:
          return {
            ... state,
            user: action.payload,
          };
      // case fromCrudUsuario.CREAR_USUARIO_SUCCESS:
      //   return {
      //     ... state,
      //     loading: false,
      //     loaded: true,
      //     users: [...action.usuarios]
      //   }

      default:
        return state;
    }
}
