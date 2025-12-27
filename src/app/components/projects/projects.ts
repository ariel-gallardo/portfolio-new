import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MaterialModule, NgFor],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Project 1',
      description: 'A brief description of the first project. Explain the purpose, the technology stack, and the outcome.',
      technologies: ['.NET Core', 'Angular', 'SQL Server'],
      imageUrl: 'https://picsum.photos/seed/project1/400/200'
    },
    {
      title: 'Project 2',
      description: 'A brief description of the second project. Explain the purpose, the technology stack, and the outcome.',
      technologies: ['ASP.NET MVC', 'jQuery', 'Azure'],
      imageUrl: 'https://picsum.photos/seed/project2/400/200'
    },
    {
      title: 'Project 3',
      description: 'A brief description of the third project. Explain the purpose, the technology stack, and the outcome.',
      technologies: ['Blazor', 'C#', 'PostgreSQL'],
      imageUrl: 'https://picsum.photos/seed/project3/400/200'
    }
  ];
}
