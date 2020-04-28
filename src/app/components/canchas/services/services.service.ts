import { Injectable } from '@angular/core';
import { HttpClient } from '@Angular/common/http';
import  { Usuario } from '../../../shared/models/usuario';
import { Cancha } from 'src/app/shared/models/cancha';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }
  getCanchas() {
    return this.http.get('http://localhost:3000/canchas/')
  }

  getCancha(id: string) {
    return this.http.get('http://localhost:3000/canchas/' + id)
  }

  deleteCancha(id: string) {
    return this.http.delete('http://localhost:3000/canchas/' + id)
  }

//  updateCancha(id: string|number, updateCancha: Cancha){
  //  return this.http.put('http://localhost:3000/canchas/' + id , updateCancha)
  //}
  saveCancha(cancha: Cancha) {
    return this.http.post('http://localhost:3000/canchas/', cancha)
  }
}


