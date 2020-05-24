import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URI = 'http://localhost:8080';

export interface ICategoria {
  id: number;
  nome: string;
}

export interface ILivro {
  id: number;
  nome: string;
  categoria: ICategoria;
}

@Injectable({
  providedIn: 'root',
})
export class LivrosService {
  constructor(private http: HttpClient) {}

  listar(): Observable<ILivro[]> {
    return this.http.get<ILivro[]>(BASE_URI + '/livros');
  }

  getBaseURI(): string {
    return BASE_URI;
  }
}
