import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit{
  public url: string;
  public project!: Project;
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
  public confirm: boolean = false;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.url = Global.url;
  }

  ngOnInit(){
    this._route.params.subscribe(params => {
      let id: any = params['id'];

      for (let i = 0; i < this.projects2.length; i++) {
        if(id == this.projects2[i]._id){
          this.project = this.projects2[i];
        }
      }

      this.getProject(id);
    })
  }

  getProject(id: any){
    this._projectService.getProject(id).subscribe(
      response => {
        console.log(response);
        this.project = response.project;
      },
      error => {
        console.log(<any>error);
      }
    )
  }
  
  deleteProject(id: any){
    this._projectService.deleteProject(id).subscribe(
      response => {
        if(response){
          this._router.navigate(['/proyectos']);
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  setConfirm(confirm: any){
    this.confirm = confirm;
  }
}
