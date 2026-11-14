import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faBluesky } from '@fortawesome/free-brands-svg-icons';
import { JobExperience } from '../../models/job_experience.model';
import { JobExperienceService } from '../../servicios/job_experience.service';

interface Skill {
  nombre: string;
}


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
  standalone: false
})
export class CvComponent implements OnInit {
  faEnvelope = faEnvelope;
  faLinkedin = faLinkedin;
  faBluesky = faBluesky;
  faGithub = faGithub;

  skills: Skill[] = [
    {nombre: 'Angular'},
    {nombre: 'Git'},
    {nombre: 'Javascript'},
    {nombre: 'MongoDB'},
    {nombre: 'MySQL'},
    {nombre: 'Node.js'},
    {nombre: 'PostgreSQL'},
    {nombre: 'TypeScript'},
    {nombre: 'Docker'},
    {nombre: 'AWS'},
    {nombre: 'Rust'},
    {nombre: 'Redis'},
    {nombre: 'Go'},
    {nombre: 'Elixir'},
    {nombre: 'REST'},
  ];

  jobExperience: JobExperience[];

  constructor(private _je: JobExperienceService) {
    this.jobExperience = _je.totalExperience;
  }

  ngOnInit() {
    this.skills.sort((a, b) => a.nombre > b.nombre ? 1 : -1);
  }

}
