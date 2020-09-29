import {Component, OnInit} from '@angular/core';
import {BsLocaleService} from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ruLocale } from 'ngx-bootstrap/locale';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  bootstrap1: Date = new Date();
  bootstrap2 = '12:45';

  constructor(private localeService: BsLocaleService) {
    defineLocale('ru', ruLocale);
  }

  ngOnInit(): void {
    this.localeService.use('ru');
  }
}
