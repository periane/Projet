import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostDetailComponent }  from './post-detail/post-detail.component';
import { EditPostComponent} from './edit-post/edit-post.component';
import { RouterModule, Routes } from '@angular/router';
import { WallComponent }      from './wall/wall.component';
import { HomeComponent }      from './home/home.component';
import { LoginUserComponent }      from './login-user/login-user.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home/:wall', component: WallComponent },
  { path: 'loginUser/:loginUser', component: LoginUserComponent },
  { path: 'detail/:id', component: PostDetailComponent },
  { path: 'editPost/:id', component: EditPostComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
