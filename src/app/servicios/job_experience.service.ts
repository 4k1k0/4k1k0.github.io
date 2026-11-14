import { Injectable } from '@angular/core';
import { JobExperience } from '../models/job_experience.model';

@Injectable({
  providedIn: 'root'
})
export class JobExperienceService {
  storiSoftwareEngineer: JobExperience = {
    title: 'Sr. Software Engineer',
    company: 'Stori',
    flag: '🇲🇽 Mexico (Remote)',
    fromText: 'January 2024',
    fromTime: '2024-01-15',
    toText: 'Present',
    activities: [
      'Design and development of highly concurrent systems',
      'Backend services for the mobile app home screen',
      'Implemented AI tools into the workflow to adopt Spec-Driven Development',
    ],
    tags: ['AWS', 'Software architecture', 'Highly concurrent systems', 'Go', 'Fintech'],
  }

  kushkiArchitect: JobExperience = {
    title: 'IT Architect',
    company: 'Kushki',
    flag: '🇪🇨 Ecuador (Remote)',
    fromText: 'July 2023',
    fromTime: '2023-07-01',
    toText: 'November 2023',
    toTime: '2023-11-01',
    activities: [
      'Design and development of internal tools',
      'Performance optimization',
    ],
    tags: ['AWS', 'Software architecture', 'Microservices', 'Go', 'Node.js', 'Fintech', 'Internal tools'],
  }

  techLeadKushki: JobExperience = {
    title: 'Tech Lead',
    company: 'Kushki',
    flag: '🇪🇨 Ecuador (Remote)',
    fromText: 'February 2022',
    fromTime: '2022-02-01',
    toText: 'July 2023',
    toTime: '2023-07-01',
    activities: [
      'Production deployments',
      'Task delegation and code supervision',
    ],
    tags: ['AWS', 'Team Management', 'Microservices', 'Go', 'Node.js', 'Fintech', 'RxJS'],
  }

  developerKushki: JobExperience = {
    title: 'Back-end developer',
    company: 'Kushki',
    flag: '🇪🇨 Ecuador (Remote)',
    fromText: 'October 2020',
    fromTime: '2020-10-26',
    toText: 'February 2022',
    toTime: '2022-02-01',
    activities: [
      'Microservices development and maintenance',
    ],
    tags: ['AWS Lambda', 'Microservices', 'Go', 'Node.js', 'DynamoDB', 'RxJS', 'Fintech'],
  }

  backArcsa: JobExperience = {
    title: 'Back-end developer',
    company: 'Grupo Arcsa',
    flag: '🇲🇽 Mexico',
    fromText: 'April 2019',
    fromTime: '2019-04-01',
    toText: 'December 2020',
    toTime: '2022-12-01',
    activities: [
      'Team lead',
      'Development and production deployments',
      'REST APIs and microservices development',
      'GNU/Linux server configuration and administration',
    ],
    tags: ['AWS', 'E-Commerce', 'Node.js', 'PostgreSQL', 'TypeScript', 'WebSockets', 'Team Management']
  }

  fullStackArcsa: JobExperience = {
    title: 'Full-stack developer',
    company: 'Grupo Arcsa',
    flag: '🇲🇽 Mexico',
    fromText: 'October 2018',
    fromTime: '2018-08-01',
    toText: 'April 2019',
    toTime: '2019-04-01',
    activities: [
      'Team lead',
      'Web application development',
      'Development and production deployments',
      'Technical interviews for designers, web, iOS, and Android developers',
      'GNU/Linux server configuration and administration',
    ],
    tags: ['Angular', 'E-Commerce', 'Node.js', 'MySQL', 'TypeScript', 'Team Management']
  }

  fullStackPugs: JobExperience = {
    title: 'Full-stack developer and SysAdmin',
    company: 'Pugsarrollos',
    flag: '🇲🇽 Mexico',
    fromText: 'April 2017',
    fromTime: '2017-04-01',
    toText: 'October 2018',
    toTime: '2018-10-01',
    activities: [
      'GNU/Linux server administration',
      'Server task automation',
      'Web application development',
    ],
    tags: ['Angular', 'AWS', 'Bash', 'Digital Ocean', 'E-Commerce', 'Firebase', 'MySQL', 'TypeScript', 'Wordpress']
  }

  freeFirstExperience: JobExperience = {
    title: 'Freelance',
    company: 'Independent',
    flag: '🇲🇽 Mexico',
    fromText: '2013',
    fromTime: '2013-01-01',
    toText: '2015',
    toTime: '2015-01-01',
    activities: [
      'Wordpress template and HTML landing page development',
      'Website styling and customization',
    ],
    tags: ['HTML', 'MySQL', 'Wordpress']
  }

  totalExperience: Array<JobExperience> = [
    this.storiSoftwareEngineer,
    this.kushkiArchitect,
    this.techLeadKushki,
    this.developerKushki,
    this.backArcsa,
    this.fullStackArcsa,
    this.fullStackPugs,
    this.freeFirstExperience,
  ]

}
