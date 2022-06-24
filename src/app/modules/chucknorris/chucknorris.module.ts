import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChucknorrisRoutingModule } from './chucknorris-routing.module';
import { ChuckFactsComponent } from './pages/chuck-facts/chuck-facts.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    ChuckFactsComponent
  ],
  imports: [
    NgxPaginationModule,
    CommonModule,
    ChucknorrisRoutingModule,
    FormsModule
  ]
})
export class ChucknorrisModule { }
