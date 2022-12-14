import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


// Servicios sirven para facilitar el acceso 
// y manejo de la data
@Injectable()
export class DbzService {

   private _personajes : Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegueta',
          poder: 8500
        }
    ];

    get personajes(): Personaje[]{
        return [...this._personajes]
    }

    constructor(){
        
    }

    agregarPersonaje (personaje: Personaje){
        this._personajes.push(personaje);
    }

}