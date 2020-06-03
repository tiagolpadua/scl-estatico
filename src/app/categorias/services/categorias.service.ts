import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const BASE_URI = 'http://localhost:8080';

export interface ICategoria {
  id: number;
  nome: string;
}

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  constructor(private http: HttpClient) {}

  getBaseURI(): string {
    return BASE_URI;
  }

  listar(): Observable<ICategoria[]> {
    return this.http.get<ICategoria[]>(BASE_URI + '/categorias');
  }

  incluir(categoria: ICategoria): Observable<ICategoria> {
    return this.http.post<ICategoria>(BASE_URI + '/categorias', categoria);
  }

  alterar(categoria: ICategoria): Observable<ICategoria> {
    return this.http.put<ICategoria>(
      BASE_URI + `/categorias/${categoria.id}`,
      categoria
    );
  }

  consultar(id: number): Observable<ICategoria> {
    return this.http.get<ICategoria>(BASE_URI + `/categorias/${id}`);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(BASE_URI + `/categorias/${id}`);
  }
}
