import { Component, Input, OnInit } from '@angular/core';
import { JobExperience } from '../../../models/job_experience.model';

@Component({
  selector: 'app-job-experience',
  templateUrl: './job-experience.component.html',
  styleUrls: ['./job-experience.component.scss'],
  standalone: false
})
export class JobExperienceComponent implements OnInit {
  @Input() experience!: JobExperience;

  ngOnInit() {
    this.experience?.tags.sort((a: string, b: string) => a.toLowerCase() > b.toLowerCase() ? 1 : -1);
  }
}
