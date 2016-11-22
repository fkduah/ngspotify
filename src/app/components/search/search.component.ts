import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../Artist';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private _spotifyService: SpotifyService) { }

  searchStr: string;
  searchRes: Artist[];
  searchMusic(){
    this._spotifyService.searchMusic(this.searchStr)
    .subscribe(res => {
      this.searchRes = res.artists.items;
    })
  }
  
  }
