import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgxSpinnerService} from "ngx-spinner";
import {AutenticacaoService} from "../_services/autenticacao/autenticacao.service";
import {UsuarioService} from "../_services/usuario/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;
  submitted: boolean = false;


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private autenticacaoService: AutenticacaoService,
    private usuarioService: UsuarioService
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  get p() {
    return this.loginForm.controls;
  }

  login(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    this.spinner.show();

    let user = this.autenticacaoService.autenticar(this.loginForm.get('usuario').value, this.loginForm.get('senha').value);

    if (user) {
      this.usuarioService.salvarUsuario(user);
      this.router.navigateByUrl('/');

    }
    this.router.navigateByUrl('/home');
    this.spinner.hide();
  }

}
