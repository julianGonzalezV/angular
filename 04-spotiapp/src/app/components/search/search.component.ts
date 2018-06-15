import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];

  constructor(private spotif: SpotifyService ) {  }

  ngOnInit() {
  }

  buscar(termino: string) {
    console.log(termino);
    this.spotif.getArtist(termino)
    .subscribe( (response: any) => {
      console.log(response.artists.items);
      this.artistas = response.artists.items;
    } );
  }

}
