import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioDocentePage } from './inicio-docente.page';

describe('InicioDocentePage', () => {
  let component: InicioDocentePage;
  let fixture: ComponentFixture<InicioDocentePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioDocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
