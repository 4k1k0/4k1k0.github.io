import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobExperienceComponent } from './job-experience.component';

describe('JobExperienceComponent', () => {
  let component: JobExperienceComponent;
  let fixture: ComponentFixture<JobExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobExperienceComponent);
    component = fixture.componentInstance;
    component.experience = {
      title: 'Developer',
      company: 'Test Co',
      flag: '🇲🇽',
      fromText: '2022',
      fromTime: '2022-01-01',
      toText: 'Present',
      activities: ['Coding'],
      tags: ['Angular', 'TypeScript']
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
