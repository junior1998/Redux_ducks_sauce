import {Injectable} from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as CrudUsuario from '../actions';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import {UsuariosService} from '../../services/usuarios.service';

@Injectable()
export class CrudUsuarioEffects {
    constructor(
      public usuarioService:UsuariosService,
      public action$:Actions

    ){}

    @Effect()
      CrearUsuario$ = this.action$.ofType(CrudUsuario.CREAR_USUARIO)
                          .pipe(switchMap( () => {
                            return this.usuarioService.crearUsuario()
                                       .pipe(
                                         map(() => new CrudUsuario.CargarUsuarios()),
                                         catchError(error => of(new CrudUsuario.crearUsuarioFail(error)))
                                       )

                          } )
                          )
      @Effect()
      EditarUsuario$ = this.action$.ofType(CrudUsuario.EDITAR_USUARIO)
                                   .pipe(
                                     switchMap( action => {
                                       const id = action['id'];
                                       const usuario = action['usuario'];

                                       return this.usuarioService.EditarUsuario(id,usuario)
                                                  .pipe(
                                                    map(usuario => {
                                                      this.usuarioService.usuarioObj = {
                                                        nombre: '',
                                                        correo: '',
                                                        password: '',
                                                        usuario: '',
                                                        imagen: ''
                                                      }
                                                      this.usuarioService.contrsObj = {
                                                        password1: '',
                                                        password2: '',
                                                      }
                                                      return new CrudUsuario.EditarUsuarioSuccess(usuario)
                                                    }),
                                                    catchError(error => of(new CrudUsuario.EditarUsuarioFail(error)))
                                                  )
                                     } )
                                   )
}
