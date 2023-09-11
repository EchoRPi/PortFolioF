import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  public title: String;
  public subtitle: string;
  public email: string;

  constructor(){
    this.title = "Juan Escobar";
    this.subtitle = "Desarrollador Web";
    this.email = "juanjv.gmail.com";

  }

  ngOnInit(){
    
  }

}
