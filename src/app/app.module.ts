import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseTableComponent } from './course-table/course-table.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import {CourseServiceClient} from './services/CourseServiceClient';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import {ModuleServiceClient} from './services/ModuleServiceClient';
import {LessonServiceClient} from './services/LessonServiceClient';
import { HomePageComponent } from './home-page/home-page.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import {QuizServiceClient} from './services/QuizServiceClient';
import { QuizComponent } from './quiz/quiz.component';
import {QuestionServiceClient} from './services/QuestionServiceClient';
import { TrueFalseQuestionComponent } from './true-false-question/true-false-question.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CourseTableComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    HomePageComponent,
    QuizzesComponent,
    QuizComponent,
    TrueFalseQuestionComponent,
    MultipleChoiceQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CourseServiceClient,
  ModuleServiceClient,
  LessonServiceClient,
  QuizServiceClient,
  QuestionServiceClient],
  bootstrap: [AppComponent],

})
export class AppModule { }
