import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export interface ICategoria {
  id: number;
  nome: string;
}

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  constructor(private http: HttpClient) {}

  listar(): Observable<ICategoria[]> {
    return this.http.get<ICategoria[]>(environment.baseURI + '/categorias');
  }

  incluir(categoria: ICategoria): Observable<ICategoria> {
    return this.http.post<ICategoria>(
      environment.baseURI + '/categorias',
      categoria
    );
  }

  alterar(categoria: ICategoria): Observable<ICategoria> {
    return this.http.put<ICategoria>(
      environment.baseURI + `/categorias/${categoria.id}`,
      categoria
    );
  }

  consultar(id: number): Observable<ICategoria> {
    return this.http.get<ICategoria>(environment.baseURI + `/categorias/${id}`);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(environment.baseURI + `/categorias/${id}`);
  }
}
