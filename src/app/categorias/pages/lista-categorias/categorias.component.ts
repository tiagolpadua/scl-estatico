import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import {
  ICategoria,
  CategoriasService,
} from '../../services/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
})
export class CategoriasComponent implements OnInit {
  categorias: ICategoria[];

  constructor(
    private categoriasService: CategoriasService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.atualizarCategorias();
  }

  atualizarCategorias(): void {
    this.categoriasService
      .listar()
      .subscribe((categorias) => (this.categorias = categorias));
  }

  excluir(id: number): void {
    this.confirmationService.confirm({
      message: 'Confirma a exclusão da categoria?',
      accept: () => {
        this.categoriasService
          .excluir(id)
          .subscribe(() => this.atualizarCategorias());
      },
    });
  }

  mantem(id?: number): void {
    if (id) {
      this.router.navigate(['/mantem-categoria', id]);
    } else {
      this.router.navigate(['/mantem-categoria']);
    }
  }
}
