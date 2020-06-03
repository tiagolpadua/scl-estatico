import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoriasService } from '../../services/categorias.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-mantem-categoria',
  templateUrl: './mantem-categoria.component.html',
  styleUrls: ['./mantem-categoria.component.css'],
})
export class MantemCategoriaComponent implements OnInit {
  id: number;
  nome: string;

  constructor(
    private categoriasService: CategoriasService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));

    if (this.id) {
      this.categoriasService
        .consultar(this.id)
        .subscribe((categoria) => (this.nome = categoria.nome));
    }
  }

  onSubmit(): void {
    if (this.id) {
      this.categoriasService
        .alterar({
          id: this.id,
          nome: this.nome,
        })
        .subscribe((categoriaAlterada) => {
          this.messageService.add({
            severity: 'success',
            summary:
              'Categoria alterada com sucesso: ' + categoriaAlterada.nome,
          });
          this.router.navigate(['/categorias']);
        });
    } else {
      this.categoriasService
        .incluir({
          id: null,
          nome: this.nome,
        })
        .subscribe((novaCategoria) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Categoria incluída com sucesso: ' + novaCategoria.nome,
          });
          this.router.navigate(['/categorias']);
        });
    }
  }

  cancelar(): void {
    this.router.navigate(['/categorias']);
  }
}
