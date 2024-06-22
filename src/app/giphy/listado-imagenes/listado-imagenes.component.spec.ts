import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoImagenesComponent } from './listado-imagenes.component';

describe('ListadoImagenesComponent', () => {
  let component: ListadoImagenesComponent;
  let fixture: ComponentFixture<ListadoImagenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListadoImagenesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListadoImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
