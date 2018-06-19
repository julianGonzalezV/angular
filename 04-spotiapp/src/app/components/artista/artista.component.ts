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

  artist: any = {};
  topTracks: any = {};
  loading: boolean = false;

  constructor( private actRoute: ActivatedRoute, private spoty: SpotifyService ) {
    this.actRoute.params.subscribe( params => {
      this.artistDetail(params['id']) ;
      this.getTopTrack(params['id']) ;
    });
  }

  ngOnInit() {
  }

  artistDetail( id: string ) {
    this.loading = true;
    this.spoty.getArtist(id)
    .subscribe( (response: any) => {
      this.artist = response;
      this.loading = false;
    } );
  }

  getTopTrack( id: string ) {
    this.loading = true;
    this.spoty.getTopTrack(id)
    .subscribe( (response: any) => {
      console.log(' getTopTrack ', response);
      this.topTracks = response;
    } );
  }




}
