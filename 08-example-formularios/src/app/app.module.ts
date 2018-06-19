import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';
import { DataValidationComponent } from './components/data-validation/data-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    DataValidationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
