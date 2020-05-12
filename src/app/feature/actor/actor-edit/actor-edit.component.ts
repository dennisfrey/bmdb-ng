import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.class';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actor-edit',
  templateUrl: '../actor-maint-shared/actor-maint.component.html',
  styleUrls: ['./actor-edit.component.css']
})
export class ActorEditComponent implements OnInit {
  title: string = "Movie-Edit";
  submitBtnTitle: string = "Edit";
  actor: Actor = new Actor();
  actorId: number = 0;

  constructor(private actorSvc: ActorService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(parms => this.actorId = parms["id"]);
    this.actorSvc.get(this.actorId).subscribe(jr => {
      this.actor = jr.data as Actor;
    });
  }

  save(){
    this.actorSvc.edit(this.actor).subscribe(jr => {
      if(jr.errors == null){
        this.router.navigateByUrl("/actor/list");
      }
      else {
        console.log("***Error editing actor.", this.actor, jr.errors);
      }

    });
  }

}
