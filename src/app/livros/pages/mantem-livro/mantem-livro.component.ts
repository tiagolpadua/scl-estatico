import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ICategoria,
  CategoriasService,
} from 'src/app/categorias/services/categorias.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LivrosService } from '../../services/livros.service';
import { SelectItem } from 'primeng/api/selectitem';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-mantem-livro',
  templateUrl: './mantem-livro.component.html',
  styleUrls: ['./mantem-livro.component.css'],
})
export class MantemLivroComponent implements OnInit {
  categorias: SelectItem[];
  categoriaSelecionada: ICategoria;
  id: number;
  titulo: string;

  constructor(
    private categoriasService: CategoriasService,
    private livrosService: LivrosService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));

    if (this.id) {
      this.livrosService.consultar(this.id).subscribe((livro) => {
        this.titulo = livro.nome;
        this.categoriaSelecionada = livro.categoria;
      });
    }

    this.categoriasService.listar().subscribe((categorias) => {
      this.categorias = categorias.map((c) => ({
        label: c.nome,
        value: c,
      }));
      if (!this.id) {
        this.categoriaSelecionada = this.categorias[0].value;
      }
    });
  }

  onSubmit(): void {
    if (this.id) {
      this.livrosService
        .alterar({
          id: this.id,
          nome: this.titulo,
          categoria: this.categoriaSelecionada,
        })
        .subscribe((livroAlterado) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Livro alterado com sucesso: ' + livroAlterado.nome,
          });
          this.router.navigate(['/livros']);
        });
    } else {
      this.livrosService
        .incluir({
          id: null,
          nome: this.titulo,
          categoria: this.categoriaSelecionada,
        })
        .subscribe((novoLivro) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Livro incluído com sucesso: ' + novoLivro.nome,
          });
          this.router.navigate(['/livros']);
        });
    }
  }

  cancelar(): void {
    this.router.navigate(['/livros']);
  }
}
