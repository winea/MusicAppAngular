import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _http:HttpClient) {

   }

   //https://developer.spotify.com/documentation/web-api/reference/search/search/
   //https://api.spotify.com/v1/search?q=tania%20bowra&type=artist" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQCBmVX9et0a2Se-f2f2l8Hy_vN4_tKK9VdvwYaEo9GYjhXEU1d1dVyzIZvaTOsHeQcEQLvi1N6rVCx33Pz0-l7Ui3yohKBO_cdmI5qt0VHy5Vke0ydU664IqH38X4zKmyrktfTjus7WJjGAvJ3jqHEk3kSWrrrui8h5ZvHMgEwiNRW_wELmB4goF_xgeEHdEg

  private url: string = 'https://api.spotify.com/v1/';

  //obter novo token em https://developer.spotify.com/console/get-search-item/?q=tania+bowra&type=artist -> get token
  private token: string = 'BQA9VG3xDL_SLCbjvG7xKPbAPVnbEHNz9fiulxf4d4cXEJhVblwjgnft27mpFDmz49vqJ-qzbDAreQcuH2gSuJGF7EjZDIXiBfgw14r5ikXoI9V6clQVobhyzvYJWA8cveAVEsexMNmOex06bxXkp4i_x3xY5VSpI7a4rXPnHh5lE3fhMCor_2gMYU5uYLe7IXvxd84nV1KRlJqMaflW9qr8pBo-8n2K4j0ywaypDg12YS-iQdh9YcRetsxXTdFvBUXhCxBkj93FfRYD8MRVplDjEfQWFAIdTLg';




  private headers: HttpHeaders = new HttpHeaders({
    Authorization:
    ' Bearer ' + this.token
  });


  getArtist(txt: string) {
    return this._http
      .get(
        this.url + `search?q=${txt}&type=artist&market=SV&offset=0&limit=20`,
        { headers: this.headers }
      )
      .pipe(map(data => data['artists'].items));
  }

  //browse
  getNewReleases() {
    return this._http
      .get(this.url + `browse/new-releases`, { headers: this.headers })
      .pipe(map(data => data['albums'].items));
  }

  getCategories() {
    return this._http
      .get(this.url + `browse/categories`,
       { headers: this.headers })
      .pipe(map(data => data['categories'].items));
  }

  getTopTracks(id: string) {
    return this._http
      .get(this.url + `artists/${id}/top-tracks?country=us`, {
        headers: this.headers
      })
      .pipe(map(data => data['tracks']));
  }

}
