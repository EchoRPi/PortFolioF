import { Component, OnInit, } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css'],
  providers: [ProjectService]
})
export class ProyectsComponent implements OnInit{
  //public projects: Project[] = [];
  public projects2: any = [
    {
      '_id': 0,
      'name': 'GicoopPlus y Web',
      'subname': 'Aplicación de gestión',
      'description': 'Soporte telefónico y apoyo en desarrollo Angular. Destacando el mantenimiento y gestión de BBDD así como migración de datos de estructuras externas a la nuestra propia asegurando la permanencia de información.',
      'langs': 'Angular, MySQL',
      'image': './assets/img/gicoop.png'
    },
    {
      '_id': 1,
      'name': 'CVNE - Tienda de vinos',
      'subname': 'Tienda virtual en PrestaShop',
      'description': 'Creación, Desarrollo y mantenimiento de pagina web desarrollada en Prestashop para la venta de vinos.',
      'langs': 'PHP, JavaScript, Prestashop',
      'image': './assets/img/cvne.png'
    },
    {
      '_id': 2,
      'name': 'Tienda García Baquero',
      'subname': 'Tienda online',
      'description': 'Mantenimiento y gestión de tienda virtual en venta de productos.',
      'langs': 'PHP, JavaScript, Prestashop',
      'image': './assets/img/Garcia Baquero.png'
    },
    {
      '_id': 3,
      'name': 'Vegan Feel',
      'subname': 'Tienda Online en WordPress',
      'description': 'Mantenimiento y gestión de web de productos.',
      'langs': 'PHP, JavaScript, WordPress',
      'image': './assets/img/Veganfeel.png'
    },
    {
      '_id': 4,
      'name': 'Dimafarma - Tienda Online',
      'subname': 'Tienda online',
      'description': 'Desarrollo y mantenimiento en Tienda virtual.',
      'langs': 'PHP, JavaScript, WordPress',
      'image': './assets/img/Dimafarma.png'
    },
    {
      '_id': 5,
      'name': 'SafeLight - Tienda Online',
      'subname': 'Tienda Online en WordPress',
      'description': 'Desarrollo funcional y mantenimiento de tienda desarrollada en Wordpress',
      'langs': 'PHP, JavaScript, WordPress',
      'image': './assets/img/SafeLight.png'
    },
    {
      '_id': 6,
      'name': 'DBLux',
      'subname': 'Tienda Online en WordPress',
      'description': 'Desarrollo funcional y mantenimiento de web desarrollada en wordpress para dar a conocer diferentes productos.',
      'langs': 'PHP, JavaScript, WordPress',
      'image': './assets/img/DBLux.png'
    },
    {
      '_id': 7,
      'name': 'Automoto',
      'subname': 'Tienda Online',
      'description': 'Desarrollo funcional y mantenimiento de tienda online.',
      'langs': 'PHP, JavaScript, Prestashop',
      'image': './assets/img/Automoto.png'
    },
    {
      '_id': 8,
      'name': 'Portal JCCM',
      'subname': 'Portal en Drupal',
      'description': 'Desarrollo funcional y mantenimiento en portal para la junta de comunidades de castilla la mancha.',
      'langs': 'Drupal',
      'image': './assets/img/JCCM.png'
    },
    {
      '_id': 9,
      'name': 'FrendiShop',
      'subname': 'Tienda Online',
      'description': 'Desarrollo funcional y mantenimiento de tienda online de productos de ferretería.',
      'langs': 'PHP, JavaScript, Prestashop',
      'image': './assets/img/FrendiShop.png'
    }
  ];
  public url: string = "";
  constructor(
    private _projectService: ProjectService
  ){
    this.url = Global.url;
  }

  ngOnInit(){
    this.getProjects();
  }

  getProjects(){
    /*this._projectService.getProjects().subscribe(
      response => {
        console.log(<any>response);
        if(response){
          this.projects = response;
        }
      },
      error => {
        console.log(<any>error);
      }
    );*/
      this.projects2;
  }

}
