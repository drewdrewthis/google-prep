import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { QuestionComponent } from './questions/question.component';
import { QuestionListComponent } from './questions/question-list/question-list.component';
import { QuestionEditorComponent } from './questions/question-editor/question-editor.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';



const appRoutes: Routes = [
	{
	  path: '',
	  redirectTo: '/dashboard',
	  pathMatch: 'full'
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	},
	{
  		path: 'questions/:id',
  		component: QuestionComponent
	},
	{
  		path: 'question-editor',
  		component: QuestionEditorComponent
	},
	{
  		path: 'questions',
  		component: QuestionListComponent
	}
	
	// Catch-all for default URLs
	/*
	{
		path: '**', 
		redirectTo: '/dashboard',
		pathMatch: 'full'
	}
	*/
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);