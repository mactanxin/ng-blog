import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { PostService } from './post.service';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { HighlightDirective } from './highlight.directive';
import { FilterPipe }from './filter.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PostsComponent,
    PostDetailComponent,
    AboutMeComponent,
    ContactComponent,
    HighlightDirective,
    FilterPipe
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
