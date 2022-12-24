import { Injectable } from '@angular/core';
import { JobExperience } from '../models/job_experience.model';

@Injectable({
  providedIn: 'root'
})
export class JobExperienceService {
  techLeadKushki: JobExperience = {
    title: 'Líder tecnico',
    company: 'Kushki',
    flag: '🇪🇨 Ecuador (Remoto)',
    fromText: 'Febrero 2022',
    fromTime: '2022-02-01',
    toText: 'Actualmente',
    activities: [
      'Despliegues a producción',
      'Delegación de tareas y supervisión de código',
    ],
    tags: ['AWS', 'Gestión de equipo', 'Microservicios', 'Go', 'Node.js', 'Fintech', 'RxJS'],
  }

  developerKushki: JobExperience = {
    title: 'Back-end developer',
    company: 'Kushki',
    flag: '🇪🇨 Ecuador (Remoto)',
    fromText: 'Octubre 2020',
    fromTime: '2020-10-26',
    toText: 'Febero 2022',
    toTime: '2022-02-01',
    activities: [
      'Desarrollo y mantenimiento de microservicios',
    ],
    tags: ['AWS Lambda', 'Microservicios', 'Go', 'Node.js', 'DynamoDB', 'RxJS', 'Fintech'],
  }

  backArcsa: JobExperience = {
    title: 'Back-end developer',
    company: 'Grupo Arcsa',
    flag: '🇲🇽 México',
    fromText: 'Abril 2019',
    fromTime: '2019-04-01',
    toText: 'Diciembre 2020',
    toTime: '2022-12-01',
    activities: [
      'Líder de equipo',
      'Despliegue a desarrollo y producción',
      'Desarrollo de REST APIs y microservicios',
      'Configuración y administración de servidores GNU/Linux',
    ],
    tags: ['AWS', 'E-Commerce', 'Node.js', 'PostgreSQL', 'TypeScript', 'WebSockets', 'Gestión de equipo']
  }

  fullStackArcsa: JobExperience = {
    title: 'Full-stack developer',
    company: 'Grupo Arcsa',
    flag: '🇲🇽 México',
    fromText: 'Octubre 2018',
    fromTime: '2018-08-01',
    toText: 'Abril 2019',
    toTime: '2019-04-01',
    activities: [
      'Líder de equipo',
      'Desarrollo de aplicaciones web',
      'Despliegue a desarrollo y producción',
      'Entrevistas técnicas para diseñadores, desarrolladores web, iOS y Android',
      'Configuración y administración de servidores GNU/Linux',
    ],
    tags: ['Angular', 'E-Commerce', 'Node.js', 'MySQL', 'TypeScript', 'Gestión de equipo']
  }
  
  fullStackPugs: JobExperience = {
    title: 'Full-stack developer y SysAdmin',
    company: 'Pugsarrollos',
    flag: '🇲🇽 México',
    fromText: 'Abril 2017',
    fromTime: '2017-04-01',
    toText: 'Octubre 2018',
    toTime: '2018-10-01',
    activities: [
      'Administración de servidores GNU/Linux',
      'Automatizar tareas en servidores',
      'Desarrollo de aplicaciones web',
    ],
    tags: ['Angular', 'AWS', 'Bash', 'Digital Ocean', 'E-Commerce', 'Firebase', 'MySQL', 'TypeScript', 'Wordpress']
  }
  
  freeFirstExperience: JobExperience = {
    title: 'Freelance',
    company: 'Independiente',
    flag: '🇲🇽 México',
    fromText: '2013',
    fromTime: '2013-01-01',
    toText: '2015',
    toTime: '2015-01-01',
    activities: [
      'Desarrollo de templates de Wordpress y landing pages con HTML',
      'Modificación de estilo a sitios web',
    ],
    tags: ['HTML', 'MySQL', 'Wordpress']
  }

  totalExperience: Array<JobExperience> = [
    this.techLeadKushki,
    this.developerKushki,
    this.backArcsa,
    this.fullStackArcsa,
    this.fullStackPugs,
    this.freeFirstExperience,
  ]

}
