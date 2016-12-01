import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../Artist';
import { Album } from '../../../Album';

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  id:String;
  album: Album[];

  constructor(private _spotifyservice: SpotifyService, private _route: ActivatedRoute  ) { }

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
        .subscribe((id) => {
          this._spotifyservice.getAlbum(id)
            .subscribe((album)=>{
              this.album = album;
            })
        })
  }

}
