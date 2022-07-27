import {TestBed} from '@angular/core/testing';

import {UsuarioService} from './usuario.service';

describe('usuarioService', () => {
  let service: UsuarioService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      providers: [
        UsuarioService
      ]
    });
    service = TestBed.inject(UsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
