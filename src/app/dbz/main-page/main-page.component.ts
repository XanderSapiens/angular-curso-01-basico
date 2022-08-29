import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent{

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 8000
  }

  // personajes: Personaje [] = [];
  // nuevo: Personaje = {nombre:'', poder: 0};

  

  // agregarNuevoPersonaje( personaje:Personaje ){
  //   this.personajes.push(personaje);
  // }

  constructor (){
    // this.personajes = this.dbzService.personajes;
    // this.nuevo = this.dbzService.nuevo;


  }

    
}




