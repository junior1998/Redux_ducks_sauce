import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {AppState} from '../store/app.reducer';
import { CargarUsuariosConst as usuariosActions} from '../store/ducks/cargarusuario';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = [];
  constructor(public store:Store<AppState>) { }

  ngOnInit() {
    this.store.select('usuarios')
              .subscribe(usuarios => {
                this.usuarios = usuarios.users
              })

    //Llando la function
      this.store.dispatch(usuariosActions.CargarUsuarios())

  }



}
