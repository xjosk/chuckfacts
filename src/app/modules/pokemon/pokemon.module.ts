import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonesComponent } from './pages/pokemones/pokemones.component';
import { PokemonPipe } from './pages/pokemones/pokemon.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PokemonesComponent,
    PokemonPipe
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    FormsModule
  ]
})
export class PokemonModule { }
