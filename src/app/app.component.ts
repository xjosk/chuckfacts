import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NewProject';

  a:number = 0;
  b:number = 0;
  suma:number = 0;

  public Suma():void {
    this.suma = this.a + this.b;
  }
}
