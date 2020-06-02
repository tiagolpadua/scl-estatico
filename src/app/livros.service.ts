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

  getBaseURI(): string {
    return BASE_URI;
  }

  listar(): Observable<ILivro[]> {
    return this.http.get<ILivro[]>(BASE_URI + '/livros');
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(BASE_URI + `/livros/${id}`);
  }
}
