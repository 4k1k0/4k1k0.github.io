import { Component, Input } from '@angular/core';
import {JobExperience} from '../../../models/job_experience.model'

@Component({
  selector: 'app-job-experience',
  templateUrl: './job-experience.component.html',
  styleUrls: ['./job-experience.component.scss']
})
export class JobExperienceComponent {
  @Input() experience: JobExperience;

  ngOnInit() {
    this.experience.tags.sort((a: string, b: string) => a.toLowerCase() > b.toLowerCase() ? 1 : -1)
  }
}
