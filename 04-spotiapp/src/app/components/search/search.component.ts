import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { LoadingComponent } from '../shared/loading/loading.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];
  loading: boolean = false;

  constructor(private spotif: SpotifyService ) { 
    
   }

  ngOnInit() {
  }

  buscar(termino: string) {
    this.loading = true;
    console.log(termino);
    this.spotif.getArtists(termino)
    .subscribe( (response: any) => {
      console.log(response);
      this.artistas = response;
      this.loading = false;
    } );
  }

}
