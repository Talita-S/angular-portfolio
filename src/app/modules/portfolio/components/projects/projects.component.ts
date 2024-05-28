import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

//Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

//Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

//Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

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

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
