import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProjectTaskBoardComponent } from './project-task-board/project-task-board.component';
import { ProjectUserListComponent } from './project-user-list/project-user-list.component';
import { ProjectCreationPanelComponent } from './project-creation-panel/project-creation-panel.component';
import { ProjectTaskInfoComponent } from './project-task-info/project-task-info.component';
import { ProjectSettingsComponent } from './project-settings/project-settings.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    ProjectTaskBoardComponent,
    ProjectUserListComponent,
    ProjectCreationPanelComponent,
    ProjectTaskInfoComponent,
    ProjectSettingsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
