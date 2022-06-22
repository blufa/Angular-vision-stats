import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testAngular';
  paramsFromParent = {title:'Enregistrer'};

  public afficher(event:any):void{
  console.log(event)
  }
}
