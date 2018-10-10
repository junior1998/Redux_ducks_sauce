import {Injectable} from '@angular/core';
import {Actions,Effect} from '@ngrx/effects';
import {UsuariosService} from '../../services/usuarios.service';
import * as usuariosActions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';




@Injectable()
export class MostrarUsuarioEffects {
    constructor(
      public actions$: Actions,
      public usuarioService: UsuariosService
    ){}

    @Effect()
        MostrarUsuario$ = this.actions$.ofType(usuariosActions.CARGAR_USUARIO)
                              .pipe( switchMap( action => {
                                const id = action['id']
                                return this.usuarioService.traerUsuarioById(id)
                                            .pipe(
                                              map(user => new usuariosActions.CargarUsuarioSuccess(user)),
                                              catchError( error => of(new usuariosActions.CargarUsuarioFail(error)))
                                            )
                              }))
}
