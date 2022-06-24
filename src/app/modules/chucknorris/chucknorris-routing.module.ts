import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChuckFactsComponent } from './pages/chuck-facts/chuck-facts.component';

const routes: Routes = [{ path: '**', component: ChuckFactsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChucknorrisRoutingModule { }
