import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { WallComponent } from './wall/wall.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

import { PostDetailComponent }  from './post-detail/post-detail.component';
import {APP_BASE_HREF} from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { MessageComponent } from './message/message.component';




@NgModule({
  declarations: [
    AppComponent,
    WallComponent,
    HomeComponent,
    PostDetailComponent,
    FooterComponent,
    LoginUserComponent,
    EditPostComponent,
    MessageComponent,

    
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
