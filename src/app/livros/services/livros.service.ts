import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategoria } from 'src/app/categorias/services/categorias.service';

const BASE_URI = 'http://localhost:8080';

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

  incluir(livro: ILivro): Observable<ILivro> {
    return this.http.post<ILivro>(BASE_URI + '/livros', livro);
  }

  alterar(livro: ILivro): Observable<ILivro> {
    return this.http.put<ILivro>(BASE_URI + `/livros/${livro.id}`, livro);
  }

  consultar(id: number): Observable<ILivro> {
    return this.http.get<ILivro>(BASE_URI + `/livros/${id}`);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(BASE_URI + `/livros/${id}`);
  }
}
