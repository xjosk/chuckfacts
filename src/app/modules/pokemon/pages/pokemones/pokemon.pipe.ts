import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from 'src/app/core/shared/models/pokemon.model';

@Pipe({
  name: 'pokemonFilter'
})
export class PokemonPipe implements PipeTransform {

  transform(value?: Array<Pokemon>, query?: string): any {
    let val = value;
    if(query !== undefined && query.trim().length > 0){
      val = value?.filter(x => x.name?.includes(query.toLowerCase()))
    }
    return val;
  }

}
