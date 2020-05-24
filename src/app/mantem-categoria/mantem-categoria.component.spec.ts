import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantemCategoriaComponent } from './mantem-categoria.component';

describe('MantemCategoriaComponent', () => {
  let component: MantemCategoriaComponent;
  let fixture: ComponentFixture<MantemCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantemCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantemCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
