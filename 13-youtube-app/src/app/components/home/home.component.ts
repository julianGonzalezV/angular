import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  videos: any[] = [];

  constructor(_ys: YoutubeService) {
    _ys.getPlayListItems().subscribe(response => {
      console.log('home', response);
      this.videos = response;
    })
  }

  ngOnInit() {
  }

}
