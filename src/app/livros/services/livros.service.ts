import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategoria } from 'src/app/categorias/services/categorias.service';
import { environment } from 'src/environments/environment';

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
    return this.http.get<ILivro[]>(environment.baseURI + '/livros');
  }

  incluir(livro: ILivro): Observable<ILivro> {
    return this.http.post<ILivro>(environment.baseURI + '/livros', livro);
  }

  alterar(livro: ILivro): Observable<ILivro> {
    return this.http.put<ILivro>(
      environment.baseURI + `/livros/${livro.id}`,
      livro
    );
  }

  consultar(id: number): Observable<ILivro> {
    return this.http.get<ILivro>(environment.baseURI + `/livros/${id}`);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(environment.baseURI + `/livros/${id}`);
  }
}
