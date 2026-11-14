import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faBluesky } from '@fortawesome/free-brands-svg-icons';
import { JobExperience } from '../../models/job_experience.model';
import { JobExperienceService } from '../../servicios/job_experience.service';
import { JobExperienceComponent } from './job-experience/job-experience.component';

interface Skill {
  nombre: string;
}

@Component({
  selector: 'app-cv',
  imports: [FaIconComponent, JobExperienceComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvComponent {
  private readonly jobExperienceService = inject(JobExperienceService);

  readonly faEnvelope = faEnvelope;
  readonly faLinkedin = faLinkedin;
  readonly faBluesky = faBluesky;
  readonly faGithub = faGithub;

  readonly skills: Skill[] = [
    { nombre: 'Angular' },
    { nombre: 'Git' },
    { nombre: 'Javascript' },
    { nombre: 'MongoDB' },
    { nombre: 'MySQL' },
    { nombre: 'Node.js' },
    { nombre: 'PostgreSQL' },
    { nombre: 'TypeScript' },
    { nombre: 'Docker' },
    { nombre: 'AWS' },
    { nombre: 'Rust' },
    { nombre: 'Redis' },
    { nombre: 'Go' },
    { nombre: 'Elixir' },
    { nombre: 'REST' },
  ].sort((a, b) => a.nombre.localeCompare(b.nombre, undefined, { sensitivity: 'base' }));

  readonly jobExperience: JobExperience[] = this.jobExperienceService.totalExperience;
}
