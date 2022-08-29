import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent{

  // @Input() personajes: Personaje[] = [];

  get personajes(){
    return this.dbzService.personajes;
  }

  // personajes : Personaje[] = [
  //   {
  //     nombre: 'Goku',
  //     poder: 15000
  //   },
  //   {
  //     nombre: 'Vegueta',
  //     poder: 8500
  //   }
  // ];

  constructor( private dbzService: DbzService){
    
  }

}
