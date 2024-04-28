import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projetos',
      title: 'Github',
      width: '100px',
      height: '51px',
      description:
        '<p>Explore os projetos que eu já criei ao longo da minha jornada na área de TI. Qualquer dúvida ou sugestão sinta-se livre para entrar em contato!</p>',
      links: [
        {
          name: 'Conheça meus projetos',
          href: 'https://github.com/Talita-S?tab=repositories',
        },
      ],
    },
  ]);
}
