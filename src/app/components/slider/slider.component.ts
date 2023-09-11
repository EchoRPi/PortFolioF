import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

declare var $: any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit{

  @Input() anchura: number = 0;
  @Output() conseguirAutor = new EventEmitter();

  public autor: any;

  constructor(){

    this.autor = {
      nombre: "Juan",
      website: "Juanweb",
      youtube: "SelvaInformatica"
    };

  }

  ngOnInit(): void {
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: this.anchura
    });
  }

  lanzar(event: any){
    console.log(event);
    this.conseguirAutor.emit(this.autor);
  }

}
