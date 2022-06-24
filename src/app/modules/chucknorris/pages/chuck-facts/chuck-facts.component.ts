import { Component, OnInit} from '@angular/core';
import { ChucknorrisService } from 'src/app/core/services/chucknorris.service';

@Component({
  selector: 'app-chuck-facts',
  templateUrl: './chuck-facts.component.html',
  styleUrls: ['./chuck-facts.component.css']
})
export class ChuckFactsComponent implements OnInit {

  randomJoke: string = '';
  categories: Array<string> = [];
  query: string = '';
  jokes: Array<any> = [];
  p: number = 1;

  constructor(
    private chuckNorrisService: ChucknorrisService,
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  public async getRandomJoke():Promise<void>{
    let request: any = await this.chuckNorrisService.getRandomJoke();
    this.randomJoke = request.value;
  }

  public async getCategories():Promise<void>{
    let request: Array<string> = await this.chuckNorrisService.getCategories();
    this.categories = request;
  }

  public async getJokeByCategory(category: string):Promise<void>{
    window.scroll(0,0);
    let request: any = await this.chuckNorrisService.getJokeByCategory(category);
    this.randomJoke = request.value;
  }

  public async getJokeByQuery(query: string):Promise<void>{
    try{
      let request: any = await this.chuckNorrisService.getJokeByQuery(query);
      this.jokes = request.result;
    } catch(err: any) {
      this.jokes = [{value: err.error.message}];
      console.log(err);
    }
  }
  
}
