import { Component } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { JobExperience } from '../../models/job_experience.model';
import { JobExperienceService } from 'src/app/servicios/job_experience.service';

interface Skill {
  nombre: string;
  nivel: 'Básico' | 'Intermedio';
}


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {
  faEnvelope = faEnvelope;
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;
  faGithub = faGithub;

  skills: Skill[] = [
    {nombre: 'Angular', nivel: 'Intermedio'},
    {nombre: 'Git', nivel: 'Intermedio'},
    {nombre: 'Javascript', nivel: 'Intermedio'},
    {nombre: 'MongoDB', nivel: 'Básico'},
    {nombre: 'MySQL', nivel: 'Intermedio'},
    {nombre: 'Node.js', nivel: 'Intermedio'},
    {nombre: 'PostgreSQL', nivel: 'Intermedio'},
    {nombre: 'TypeScript', nivel: 'Intermedio'},
    {nombre: 'Docker', nivel: 'Básico'},
    {nombre: 'AWS', nivel: 'Intermedio'},
    {nombre: 'React', nivel: 'Básico'},
    {nombre: 'Redis', nivel: 'Básico'},
    {nombre: 'Go', nivel: 'Intermedio'},
    {nombre: 'Elixir', nivel: 'Básico'},
    {nombre: 'REST', nivel: 'Intermedio'},
  ];

  jobExperience: JobExperience[];

  constructor(private _je: JobExperienceService) {
    this.jobExperience = _je.totalExperience;
  }

  ngOnInit() {
    this.skills.sort((a, b) => a.nombre > b.nombre ? 1 : -1);
  }

}
