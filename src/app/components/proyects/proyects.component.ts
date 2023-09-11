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
  public projects: Project[] = [];
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
    this._projectService.getProjects().subscribe(
      response => {
        console.log(<any>response);
        if(response){
          this.projects = response;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
