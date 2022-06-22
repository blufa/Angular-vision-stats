import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements OnInit {
  TacheActuel = "Bavarder, Manger, Danser";
  items = ['Soiré', "Parler","Rencontre"];
  constructor() { }

  ngOnInit(): void {
  }

  public addItem(newItem: string) {
    console.log(newItem)
    this.items.push(newItem);
  }

}
