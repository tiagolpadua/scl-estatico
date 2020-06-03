import { Component, OnInit } from '@angular/core';
import { LivrosService, ILivro } from '../../services/livros.service';
import { ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css'],
})
export class LivrosComponent implements OnInit {
  livros: ILivro[];

  constructor(
    private livrosService: LivrosService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) {}

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

  mantem(id?: string): void {
    if (id) {
      this.router.navigate(['/mantem-livro', id]);
    } else {
      this.router.navigate(['/mantem-livro']);
    }
  }
}
