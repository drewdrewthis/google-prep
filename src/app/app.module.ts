import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { routing }       from './app.routing';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

// App Specific:
import { AppComponent }       from './app.component';
import { SidebarComponent }   from './layouts/sidebar/sidebar.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { QuestionComponent }  from './questions/question.component';
import { QuestionListComponent } from './questions/question-list/question-list.component';
import { QuestionsService }  from './questions/questions.service';
import { QuestionEditorComponent } from './questions/question-editor/question-editor.component';
import { QuestionNavComponent } from './questions/question-nav/question-nav.component';

import {DND_PROVIDERS, DND_DIRECTIVES} from 'ng2-dnd';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	FormsModule,
    HttpModule,
    //InMemoryWebApiModule.forRoot(InMemoryDataService),
  	routing
  ],
  declarations: [ 
  	AppComponent, 
    SidebarComponent,
  	DashboardComponent,
  	QuestionComponent,
    QuestionEditorComponent,
    QuestionNavComponent,
    QuestionListComponent,
    DND_DIRECTIVES
  ],
  providers: [
    QuestionsService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
