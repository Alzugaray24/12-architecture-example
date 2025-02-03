import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CardBtnComponent } from './card-btn.component';

describe('CardBtnComponent', () => {
  let component: CardBtnComponent;
  let fixture: ComponentFixture<CardBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardBtnComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct input properties', () => {
    component.action = 'create';
    component.entityName = 'Usuario';
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(
      By.css('button')
    ).nativeElement;
    expect(buttonElement.textContent).toContain('Crear Usuario');
  });

  it('should display the correct button text for update action', () => {
    component.action = 'update';
    component.entityName = 'Usuario';
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(
      By.css('button')
    ).nativeElement;
    expect(buttonElement.textContent).toContain('Actualizar Usuario');
  });

  it('should display the correct button text for delete action', () => {
    component.action = 'delete';
    component.entityName = 'Usuario';
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(
      By.css('button')
    ).nativeElement;
    expect(buttonElement.textContent).toContain('Eliminar Usuario');
  });

  it('should display the correct button text for list action', () => {
    component.action = 'list';
    component.entityName = 'Usuario';
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(
      By.css('button')
    ).nativeElement;
    expect(buttonElement.textContent).toContain('Listar Usuario');
  });
});
