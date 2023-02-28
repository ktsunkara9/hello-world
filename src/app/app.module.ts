import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { RatingComponent } from './rating/rating.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LanguagesFormComponent } from './languages-form/languages-form.component';
import { PasswordChangeFormComponent } from './password-change-form/password-change-form.component';
import { HttpServicesDemoComponent } from './http-services-demo/http-services-demo.component';

import { PostsService } from './services/posts.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    RatingComponent,
    ContactFormComponent,
    SignUpComponent,
    LanguagesFormComponent,
    PasswordChangeFormComponent,
    HttpServicesDemoComponent,
    NavBarComponent,
    HomeComponent,
    NotFoundComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'', component: HomeComponent},
      {path:'posts/:id', component: PostComponent},
      {path:'posts', component: HttpServicesDemoComponent},
      {path:'**', component: NotFoundComponent}
    ])
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
