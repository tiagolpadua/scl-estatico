import { Component, OnInit } from '@angular/core';
import { LivrosService, ILivro } from '../livros.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css'],
})
export class LivrosComponent implements OnInit {
  constructor(
    private livrosService: LivrosService,
    private confirmationService: ConfirmationService
  ) {}

  livros: ILivro[];

  ngOnInit(): void {
    this.atualizarLivros();
  }

  atualizarLivros(): void {
    this.livrosService.listar().subscribe((livros) => (this.livros = livros));
  }

  excluir(id: number): void {
    this.confirmationService.confirm({
      message: 'Confirma a exclusão do livro?',
      accept: () => {
        this.livrosService.excluir(id).subscribe(() => this.atualizarLivros());
      },
    });
  }
}
