import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieImage'
})
export class MovieImagePipe implements PipeTransform {

  transform(movie: any): any {
    const url = 'https://image.tmdb.org/t/p/w500';
    //console.log('va a aplicar pile ', movie.backdrop_path)
    if(movie.backdrop_path){
      return url + movie.backdrop_path
    }else{
      if(movie.poster_path){
        return url + movie.poster_path
      }else{
        return "assets/images/noImage.png"
      }
    }
  }

}
