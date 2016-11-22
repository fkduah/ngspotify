import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service'
import { Artist } from '../../../Artist'
import { Album } from '../../../Album'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id:String;
  artist: Artist[];
  album: Album[];

  constructor(private _spotifyservice: SpotifyService, private _route: ActivatedRoute  ) { }

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
        .subscribe((id) => {
          this._spotifyservice.getArtist(id)
            .subscribe((artist)=>{
              this.artist = artist;
            })
        })
  }

}
