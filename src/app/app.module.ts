import {FilterArrayPipe} from './searchdate.pipe';
import {SearchPipe} from './search.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material/';
import { DatePipe } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DemoDatepickerBasicComponent } from './datepicker-popup';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    FilterArrayPipe,
    DemoDatepickerBasicComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    BsDatepickerModule.forRoot(),
    Ng2SearchPipeModule,
    MatDatepickerModule,
    NgbModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
