import { LOCALE_ID , NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// Modulo personalizado
import { AppRouterModule } from './app-router.module';
import { SalesModule } from './sales/sales.module';
import { SharedModule } from './shared/shared.module';

// Cambiar el local de la app
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData( localeEs );


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRouterModule,
    SalesModule
  ],
  providers: [
    {provide: LOCALE_ID , useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
