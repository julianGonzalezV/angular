import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  constructor( private actRoute: ActivatedRoute, private spoty: SpotifyService ) {
    this.actRoute.params.subscribe( params => this.artistDetail(params['id']) );
  }

  ngOnInit() {
  }

  artistDetail( id: string ) {
    this.spoty.getArtist(id)
    .subscribe( (response: any) => {
      console.log('artist: ', response);
    } );
  }



}
