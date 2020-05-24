import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantemLivroComponent } from './mantem-livro.component';

describe('MantemLivroComponent', () => {
  let component: MantemLivroComponent;
  let fixture: ComponentFixture<MantemLivroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantemLivroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantemLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
