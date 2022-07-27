import { TestBed } from '@angular/core/testing';

import { LocalizacaoService } from './localizacao.service';

describe('LocalizacaoService', () => {
  let service: LocalizacaoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({});
    service = TestBed.inject(LocalizacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
