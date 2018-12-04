import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostDetailComponent }  from './post-detail/post-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { WallComponent }      from './wall/wall.component';

const routes: Routes = [
  { path: '', redirectTo: '/wall', pathMatch: 'full' },
  { path: 'wall', component: WallComponent },
  { path: 'detail/:id', component: PostDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
