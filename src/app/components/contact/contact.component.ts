import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  public widthSlider: number = 0;
  public anchuraToSlider: any;
  public autor: any;

  @ViewChild('textos') textos: any;

  constructor(){

  }

  ngOnInit() {
    setTimeout(() => {
      console.log(this.textos);
    }, 100);
  }

  cargarSlider(){
    this.anchuraToSlider = this.widthSlider
  }

  getAutor(event: any){
    this.autor = event;
  }

}
