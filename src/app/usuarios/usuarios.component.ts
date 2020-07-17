import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  users : any [] = []
  tittle = 'Ruben Sotelo'
  datos : any = String
  constructor(protected userService : UserService) { }


  ngOnInit(): void {
    this.userService.getUsuario().subscribe(
      (data) => {
        console.log(data)
          this.datos = data['info']
          this.users = data['results']
      },
      (error) =>{
        console.error(error)
      }
    )
  }

}
