import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { firstValueFrom } from 'rxjs';
import { ResponsePokemon } from '../shared/models/response.pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  _url = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  async getAll():Promise<ResponsePokemon>{
    let url = `${this._url}?limit=100&offset=200`;
    return await firstValueFrom(this.http.get<ResponsePokemon>(url).pipe());
  }

  async post():Promise<any> {
    let header: HttpHeaders = new HttpHeaders();
    
    return await firstValueFrom(this.http.get<Array<string>>("https://api.chucknorris.io/jokes/categories")
    .pipe());
  }
}
