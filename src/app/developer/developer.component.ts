import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SkillComponent } from '../skill/skill.component';


@Component({
  selector: 'app-developer',
  standalone: true,
  imports: [FormsModule,CommonModule,SkillComponent],
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.scss'
})
export class DeveloperComponent implements OnInit{
  developer: Developer;

  constructor() {
    this.developer = new Developer('Doe', 'john', 30, 'male' ,'experienced full-stack developer ',
    [
      new Skill('Angular', 'https://angular.io/assets/images/logos/angular/angular.png', 'https://angular.io'),
      new Skill('TypeScript', 'https://reactjs.org/logo-og.png', 'https://reactjs.org')
    ]
  );

   
  }
  ngOnInit(): void {

  }
 

}
