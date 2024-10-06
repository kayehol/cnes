import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddressDTO } from './address-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class NewUnitService {
  url = 'https://viacep.com.br/ws';

  constructor(private http: HttpClient) { }

  getAddress(cep: string) {
    return this.http.get<AddressDTO>(this.url + "/" + cep + "/json/");
  }
}
