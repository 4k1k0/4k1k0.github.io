import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { JobExperience } from '../../../models/job_experience.model';

@Component({
  selector: 'app-job-experience',
  templateUrl: './job-experience.component.html',
  styleUrl: './job-experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobExperienceComponent implements OnChanges {
  @Input({ required: true }) experience!: JobExperience;
  sortedTags: string[] = [];

  ngOnChanges() {
    this.sortedTags = [...(this.experience?.tags ?? [])].sort((a, b) =>
      a.localeCompare(b, undefined, { sensitivity: 'base' })
    );
  }
}
