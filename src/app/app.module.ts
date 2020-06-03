import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriasComponent } from './categorias/pages/lista-categorias/categorias.component';
import { HomeComponent } from './home/home.component';
import { LivrosComponent } from './livros/pages/lista-livros/livros.component';
import { MantemCategoriaComponent } from './categorias/pages/mantem-categoria/mantem-categoria.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { MantemLivroComponent } from './livros/pages/mantem-livro/mantem-livro.component';
import { ToastModule } from 'primeng/toast';
import { SCLHttpRequestInterceptor } from './infra/SCLHttpRequestInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LivrosComponent,
    CategoriasComponent,
    MantemLivroComponent,
    MantemCategoriaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CardModule,
    ButtonModule,
    ConfirmDialogModule,
    TableModule,
    InputTextModule,
    DropdownModule,
    ToastModule,
  ],
  providers: [
    ConfirmationService,
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SCLHttpRequestInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
