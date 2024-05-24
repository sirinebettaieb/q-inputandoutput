import { Routes } from '@angular/router';
import { DeveloperComponent } from './developer/developer.component';
import { SkillComponent } from './skill/skill.component';


export const routes: Routes = [
    { path: '', redirectTo: '/developer', pathMatch: 'full' },
    { path: 'developer', component: DeveloperComponent }

  
   
  
    
];
