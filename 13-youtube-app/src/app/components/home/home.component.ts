import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  videos: any[] = [];
  selectedVideo: any;

  constructor(private _ys: YoutubeService) {
    this._ys.getPlayListItems().subscribe(response => this.videos = response);
  }

  ngOnInit() {
  }

  verVideo(video: any) {
    this.selectedVideo = video;
    $('#exampleModal').modal('show');
  }

  cerrarModal() {
    this.selectedVideo = null;
    $('#exampleModal').modal('hide');
  }


  cargarMas() {
    this._ys.getPlayListItems().subscribe(response => this.videos.push.apply(this.videos, response));
  }

}
