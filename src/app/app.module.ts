import {CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {CabecalhoModule} from "./componentes/cabecalho/cabecalho.module";
import {RodapeModule} from "./componentes/rodape/rodape.module";
import {HttpClientModule} from "@angular/common/http";
import {registerLocaleData} from '@angular/common';
import localeBr from '@angular/common/locales/pt';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginModule} from "./login/login.module";
import {UsuarioService} from "./_services/usuario/usuario.service";

registerLocaleData(localeBr, 'pt')

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
    CabecalhoModule,
    RodapeModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
    UsuarioService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
