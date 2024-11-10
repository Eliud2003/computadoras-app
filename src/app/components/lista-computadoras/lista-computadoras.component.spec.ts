import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaComputadorasComponent } from './lista-computadoras.component';

describe('ListaComputadorasComponent', () => {
  let component: ListaComputadorasComponent;
  let fixture: ComponentFixture<ListaComputadorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaComputadorasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaComputadorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
