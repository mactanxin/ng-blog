import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { PostsComponent }      from './posts/posts.component';
import { PostDetailComponent }  from './post-detail/post-detail.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  // { path: 'dashboard',  component: DashboardComponent },
  { path: 'post/:id', component: PostDetailComponent },
  { path: 'posts',     component: PostsComponent },
  { path: 'about', component: AboutMeComponent},
  { path: 'contact', component: ContactComponent}, 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}