import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MaterialModule, NgFor],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class SkillsComponent {
  skills = [
    { name: '.NET', icon: 'fas fa-code' },
    { name: 'C#', icon: 'fas fa-code' },
    { name: 'ASP.NET Core', icon: 'fas fa-server' },
    { name: 'Entity Framework', icon: 'fas fa-database' },
    { name: 'SQL Server', icon: 'fas fa-database' },
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'TypeScript', icon: 'fas fa-code' },
    { name: 'JavaScript', icon: 'fab fa-js-square' },
    { name: 'HTML', icon: 'fab fa-html5' },
    { name: 'CSS', icon: 'fab fa-css3-alt' },
    { name: 'SCSS', icon: 'fab fa-sass' },
    { name: 'Azure', icon: 'fab fa-microsoft' },
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'Docker', icon: 'fab fa-docker' }
  ];
}
