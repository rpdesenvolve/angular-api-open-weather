import { TestBed } from '@angular/core/testing';

import { AuthGuardService } from './auth.guard.service';
import {RouterTestingModule} from "@angular/router/testing";
import {UsuarioService} from "../usuario/usuario.service";

describe('AuthGuardService', () => {
  let service: AuthGuardService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        RouterTestingModule
      ],
      providers:[
        UsuarioService
      ]
    });
    service = TestBed.inject(AuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
