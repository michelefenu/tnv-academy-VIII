import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuItem } from 'src/models/MenuItem';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { 
  }

  getAllPiatti() {
    return this.http.get<MenuItem[]>('https://my-json-server.typicode.com/michelefenu/tnv-academy-VIII/piatti');
  }

  getPiatto(id: number) {
    return this.http.get<MenuItem>(`https://my-json-server.typicode.com/michelefenu/tnv-academy-VIII/piatti/${id}`);
  }
}
