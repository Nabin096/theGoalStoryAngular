import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { VirtualScrollModule } from 'angular2-virtual-scroll';
import { HttpClientModule }    from '@angular/common/http';
import{ BlogService } from './blog.service'
import { AppComponent } from './app.component';
import { ScrollComponent } from './scroll/scroll.component';
import { FeedSkeletonComponent } from './feed-skeleton/feed-skeleton.component';
import { RouterModule, Routes } from '@angular/router';
import { BlogCardComponent } from './blog-card/blog-card.component';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { MediaPlayerComponent } from './media-player/media-player.component';
import { BlogcontentComponent } from './blogcontent/blogcontent.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component'



const appRoutes: Routes = [
 { path: 'Blog/:id',      component: BlogcontentComponent },
  {  path:'Blogs/', component:FeedSkeletonComponent},
  { path: '',
    redirectTo: 'Blogs/',
    pathMatch: 'full'
  },
  { path: 'about', component : AboutUsComponent },
 
];



@NgModule({
  declarations: [
    AppComponent,
    ScrollComponent,
    FeedSkeletonComponent,
    BlogCardComponent,
    MediaPlayerComponent,
    BlogcontentComponent,
    FooterComponent,
    NavbarComponent,
    AboutUsComponent,

    
  ],
  imports: [
    BrowserModule,
    VirtualScrollModule,
    HttpClientModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [
    BlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


