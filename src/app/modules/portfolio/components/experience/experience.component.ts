import { Component, signal } from '@angular/core';
import { IExperience } from '../../interface/IExperience.interface';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  public arrayExperience = signal<IExperience[]>([
    {
      summary: {
        strong: 'Application Developer',
        p: 'IBM | Aug 2022 - Present',
      },
      text: '<p>Atuando como desenvolvedora na IBM, prestando consultoria para o Banco do Brasil e destacando-me em criação de uma nova aplicação em nuvem (AWS/Openshift) com Font-end em Angular e Back-end em Java </p>',
    },
    {
      summary: {
        strong: 'Intern',
        p: 'IBM | Aug 2021 - Aug 2022',
      },
      text: '<p>Prestando consultoria para o banco Bradesco e destacando-me na modernização e migração de aplicações desenvolvidas em C#/.Net para a nuvem (Azure/Openshift) </p>',
    },
    {
      summary: {
        strong: 'Teacher',
        p: 'Tynkers | Feb 2021 - Jul 2021',
      },
      text: '<p>Minha primeira oportunidade na áera de tecnologia, atuando como professora de lógica de programação para crianças e adolescentes </p>',
    },
  ]);
}
