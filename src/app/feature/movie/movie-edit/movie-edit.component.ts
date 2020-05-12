import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-edit',
  templateUrl: '../movie-maint-shared/movie-maint.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  title: string = "Movie-Edit";
  submitBtnTitle: string = "Edit";
  movie: Movie = new Movie();
  movieId: number = 0;

  constructor(private movieSvc: MovieService, 
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(parms => this.movieId = parms["id"]);
    this.movieSvc.get(this.movieId).subscribe(jr => {
      this.movie = jr.data as Movie;
    });   
  }

  save(){
    this.movieSvc.edit(this.movie).subscribe(jr => {
      if(jr.errors === null){
        this.router.navigateByUrl("/movie/list");
      }
      else {
        console.log("***Error editing movie.", this.movie, jr.errors);
      }
    });
  }
}
