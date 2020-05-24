import { Component, OnInit } from '@angular/core';
import { LivrosService, ILivro } from '../livros.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css'],
})
export class LivrosComponent implements OnInit {
  constructor(private livrosService: LivrosService) {}

  livros: ILivro[];

  ngOnInit(): void {
    this.livrosService.listar().subscribe((livros) => (this.livros = livros));
  }
}
