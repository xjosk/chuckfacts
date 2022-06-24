import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChucknorrisService {

  constructor(private http: HttpClient) { }

  async getRandomJoke():Promise<any>{
    return await firstValueFrom(this.http.get<any>('https://api.chucknorris.io/jokes/random'));
  }

  async getCategories():Promise<any>{
    return await firstValueFrom(this.http.get<any>('https://api.chucknorris.io/jokes/categories'));
  }

  async getJokeByCategory(category: string):Promise<any>{
    return await firstValueFrom(this.http.get<any>(`https://api.chucknorris.io/jokes/random?category=${category}`));
  }

  async getJokeByQuery(query: string):Promise<any>{
    return await firstValueFrom(this.http.get<any>(`https://api.chucknorris.io/jokes/search?query=${query}`));
  }
}
