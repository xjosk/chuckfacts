 import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { Pokemon } from 'src/app/core/shared/models/pokemon.model';
import { ResponsePokemon } from 'src/app/core/shared/models/response.pokemon.model';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css']
})
export class PokemonesComponent implements OnInit {

  response : ResponsePokemon = new ResponsePokemon();
  pokemonId? : Array<Pokemon> = [];
  filterData? = ''

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.loadData();
    this.plenum();
  }

  private async plenum(){
    let prom: Array<string> = await this.pokemonService.post();
    prom.forEach((data: string) => console.log(data));
  }

  private async loadData(){
    let prom = await this.pokemonService.getAll();
    this.response = prom;
    prom.results?.forEach(item => {
      let tempArray: Array<string> = item.url?.split('/')!;
      this.pokemonId!.push({
        name: item.name,
        url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${tempArray[6]}.png`
      });
    });
  }
}
