import { Component, Input, OnInit } from '@angular/core';

import { ArtistModel } from '../model/artist.model';
import { SpotifyService } from '../services/spotify.service';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'play-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SpotifyService, NgbRatingConfig]
})

export class SearchComponent implements OnInit {
  search: string;
  result: ArtistModel[];
  // artists: any[] = [];
  newNumber: number;

  constructor(private _spotifyService: SpotifyService,
              config: NgbRatingConfig) { }

  ngOnInit(): void {
  }

  convertValue (value) {
    this.newNumber = 100 * (+value/10);
    return this.newNumber;
  }

  searchMusic() {
    this._spotifyService.getArtist(this.search)
        .subscribe(
          data => {
          // console.log("search: ", data);
          this.result = data;
        },
          err=> console.error(err));
  }

}
