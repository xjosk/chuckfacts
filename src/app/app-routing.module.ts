import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'pokemon', loadChildren: () => import('./modules/pokemon/pokemon.module').then(m => m.PokemonModule) },
  { path: '**', loadChildren: () => import('./modules/chucknorris/chucknorris.module').then(m => m.ChucknorrisModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
