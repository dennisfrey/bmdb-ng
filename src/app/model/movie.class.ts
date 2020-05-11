export class Movie {
    id: number;
    title: string;
    rating: string;
    year: number;
    director: string;

    constructor(id: number = 0, title: string = "", rating: string = "", year: number = 0, director: string = ""){
        this.id = id;
        this.title = title;
        this.rating = rating;
        this.year = year;
        this.director = director;

    }
}
