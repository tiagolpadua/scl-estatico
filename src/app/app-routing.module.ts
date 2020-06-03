import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LivrosComponent } from './livros/pages/lista-livros/livros.component';
import { CategoriasComponent } from './categorias/pages/lista-categorias/categorias.component';
import { MantemCategoriaComponent } from './categorias/pages/mantem-categoria/mantem-categoria.component';
import { MantemLivroComponent } from './livros/pages/mantem-livro/mantem-livro.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'livros', component: LivrosComponent },
  { path: 'mantem-livro', component: MantemLivroComponent },
  { path: 'mantem-livro/:id', component: MantemLivroComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'mantem-categoria', component: MantemCategoriaComponent },
  { path: 'mantem-categoria/:id', component: MantemCategoriaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
