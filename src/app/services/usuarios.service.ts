import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

   usuarioObj = {
     nombre: '',
     correo: '',
     password: '',
     usuario: '',
     imagen: ''
   }

   contrsObj = {
     password1: '',
     password2: '',
   }

    private url = 'http://localhost:3000';

  constructor( private http: HttpClient ) { }

  traerUsuarios() {
    return this.http.get(`${ this.url }/usuarios`)
          .pipe(
            map( resp => resp['usuario'])
          );
  }

  crearUsuario(){
    let urlFinal = this.url + '/' + 'usuarios';

    return this.http.post(urlFinal,this.usuarioObj).pipe(
      map((resp:any) => {
        console.log(resp)
        Swal({
        type: 'success',
        title: 'Usuario registrado correctamente',
        text: resp.usuarios.nombre
      })
      return  resp['usuario']
      })
    )
  }

  traerUsuarioById(id:string){
    let urlFinal = this.url + '/' + 'usuarios/usuario/' + id;

    return this.http.get(urlFinal).pipe(
      map(resp => resp['usuario'])
    )
  }

  EditarUsuario(id:string,usuario:any){
    let urlFinal = this.url + '/' + 'usuarios/' + id + '/si';

    return this.http.put(urlFinal,usuario).pipe(
      map((resp:any) => {
        Swal({
        type: 'success',
        title: 'Usuario editado correctamente',
        text: resp.usuario.nombre
      })



      return resp['usuario']
      })
    )
  }
}
