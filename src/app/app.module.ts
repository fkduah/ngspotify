import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RouterModule }   from '@angular/router';



import { SpotifyService } from './services/spotify.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';

import { Artist } from '../Artist';
import { Album } from '../Album';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavbarComponent,
    AboutComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
     RouterModule.forRoot([
       {path: '', component: SearchComponent},
       {path: 'about', component: AboutComponent},
       {path: 'artist/:id', component: ArtistComponent},
       {path: 'album/:id', component: AlbumComponent}
    ])
  ],
  providers: [SpotifyService, Artist, Album],
  bootstrap: [AppComponent]
})
export class AppModule { }
