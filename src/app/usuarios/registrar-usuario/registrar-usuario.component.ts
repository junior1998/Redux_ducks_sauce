import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Store } from '@ngrx/store';
import {AppState} from '../../store/app.reducer';
import * as usuariosActions from '../../store/actions'
import {ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.scss']
})
export class RegistrarUsuarioComponent implements OnInit {

  texto_boton:string = 'Registrar';
  _id:string;

  constructor(
    public UsuarioSer:UsuariosService,
    public store:Store<AppState>,
    public router:ActivatedRoute

  ) { }

  ngOnInit() {
    this.router.params
        .subscribe(params =>{
          this._id = params['id'];
          // llamar funcion de traer cliente con id
          if(this._id === 'nuevo'){
          this.store.select('crearusuario')
              .subscribe((resp:any) => {

                console.log(resp.user.error)
              })
          }else{
            this.store.dispatch(new usuariosActions.CargarUsuario(this._id));
            this.texto_boton = 'Editar'
            this.store.select('MostrarUsuarioById')
                .subscribe((resp:any) =>{
                  // console.log(resp.user)
                  if(resp === ''){
                    return;
                  }else{
                    this.UsuarioSer.usuarioObj = resp.user
                  }
                  // this.UsuarioSer.contrsObj = resp.user.password;
                })
          }
        })

  }

  registrar(){

    if(this.UsuarioSer.contrsObj.password1 == '' && this.UsuarioSer.contrsObj.password2 == '') {
      this.store.dispatch(new usuariosActions.EditarUsuario(this._id,this.UsuarioSer.usuarioObj))
    }else if(this.UsuarioSer.contrsObj.password1 === this.UsuarioSer.contrsObj.password2) {
      if(this.texto_boton === 'Registrar') {
        this.UsuarioSer.usuarioObj.password = this.UsuarioSer.contrsObj.password1;
        this.store.dispatch(new usuariosActions.crearUsuario(this.UsuarioSer.usuarioObj));
      }else{
        this.store.dispatch(new usuariosActions.EditarUsuario(this._id,this.UsuarioSer.usuarioObj))
      }
    }else{
      Swal({
      type: 'info',
      title: 'Los campos no son iguales'
      })
    }

  }

}
