import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { RegistrarUsuarioComponent } from './usuarios/registrar-usuario/registrar-usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';



const routes: Routes = [
   { path: 'usuarios', component: UsuariosComponent },
   { path: 'registrar-usuario/:id', component: RegistrarUsuarioComponent},
   { path: '**', redirectTo: 'usuarios' }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
