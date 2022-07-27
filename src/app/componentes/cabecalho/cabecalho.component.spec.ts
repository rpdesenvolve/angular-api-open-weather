import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CabecalhoComponent} from './cabecalho.component';
import {RouterTestingModule} from "@angular/router/testing";
import {UsuarioService} from "../../_services/usuario/usuario.service";

describe('CabecalhoComponent', () => {
  let component: CabecalhoComponent;
  let fixture: ComponentFixture<CabecalhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabecalhoComponent],
      imports: [
        RouterTestingModule
      ],
      providers:[
        UsuarioService
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CabecalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
