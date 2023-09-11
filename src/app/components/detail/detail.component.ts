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
