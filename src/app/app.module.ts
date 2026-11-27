import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentsComponent } from './students/students.component';
import { PostComponent } from './post/post.component';
import { CommentsComponent } from './comments/comments.component';
import { StudenttwoComponent } from './studenttwo/studenttwo.component';
import { RevisionComponent } from './revision/revision.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentsComponent,
    PostComponent,
    CommentsComponent,
    StudenttwoComponent,
    RevisionComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
