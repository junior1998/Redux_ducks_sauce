import {Injectable} from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { CargarUsuariosConst as usuariosActions} from '../ducks/cargarusuario';
import { Type as TypeUsu} from '../ducks/cargarusuario';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import {UsuariosService} from '../../services/usuarios.service';

@Injectable()
export class UsuariosEffects {
  constructor(
    public actions$:Actions,
    public usuarioService:UsuariosService
  ){}

  @Effect()
    cargarUsuarios$ = this.actions$.ofType(TypeUsu.CARGAR_USUARIOS)
                          .pipe(switchMap( ()=>{
                            return this.usuarioService.traerUsuarios()
                                        .pipe(
                                          map(usuarios => usuariosActions.CargarUsuariosSuccess(usuarios)),
                                          catchError(error => of( usuariosActions.CargarUsuariosFail(error)))
                                        );
                          }))

}
