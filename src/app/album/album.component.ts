import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'play-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  category: any[] = [];
  message: string;

  constructor(private _spotifyService: SpotifyService) {
    this._spotifyService.getCategories()
    .subscribe(
      (data: any) => {
        console.log("category: ", data);
        this.category = data;
      },
      error =>
        console.error(error));
   }

  ngOnInit(): void {
  }

  displayCategory() {

  }

  // displayAlbums() {
  //   this._spotifyService.getNewReleases()
  //       .subscribe((data) => {
  //         this.topTrack = data;
  //       })
  // }


}
