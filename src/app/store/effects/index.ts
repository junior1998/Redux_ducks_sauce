import { UsuariosEffects } from './usuarios.effects';
import { CrudUsuarioEffects } from './crudusuario.effects';
import { MostrarUsuarioEffects } from './usuario.effects';


export const effectsArr: any[] = [
  UsuariosEffects,
  CrudUsuarioEffects,
  MostrarUsuarioEffects
]

export * from './usuarios.effects';
export * from './crudusuario.effects';
export * from './usuario.effects';
