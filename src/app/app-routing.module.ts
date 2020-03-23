import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {CourseTableComponent} from './course-table/course-table.component';


const routes: Routes = [
  {path: '', component: CourseTableComponent},
  {path: 'course-viewer/:courseId', component: CourseViewerComponent},
  {path: 'course-viewer/:courseId/modules/:moduleId', component: CourseViewerComponent},
  {path: 'course-viewer/:courseId/modules/:moduleId/lessons/:lessonId', component: CourseViewerComponent},
  {path: 'course-viewer/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId', component: CourseViewerComponent}
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
