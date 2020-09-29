import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import {FormsModule} from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule} from 'ngx-bootstrap/accordion';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MAT_DATE_LOCALE, MatFormFieldModule, MatInputModule} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TimepickerModule.forRoot(),
    FormsModule,
    NgxMaterialTimepickerModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatMomentDateModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'ru-RU'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
