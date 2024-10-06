import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UnitsDTO, Unit } from './unit.interface';

@Injectable({
  providedIn: 'root'
})
export class UnitService {
  //url = 'https://apidadosabertos.saude.gov.br/cnes/estabelecimentos?limit=100&offset=1';
  //url = 'https://viacep.com.br/ws/57035390/json/';
  //url = 'https://wttr.in/Maceio?format=j1';
  url = 'http://localhost:3000/estabelecimentos'

  constructor(private http: HttpClient) { }

  getUnits() {
    return this.http.get<UnitsDTO>(this.url);
  }

  getUnit(codigo: string) {
    return this.http.get<Unit>(this.url + "/" + codigo);
  }
}
