import { Injectable } from '@angular/core';
import { Social } from '../models/social.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly specs: Social[] = [
    {
      nombre: 'Bluesky',
      descripcion: '@wako',
      url: 'https://bsky.app/profile/wako.bsky.social'
    },
    {
      nombre: 'LinkedIn',
      descripcion: 'Rodrigo Patiño',
      url: 'https://www.linkedin.com/in/rodrigo-patino-dev/'
    },
    {
      nombre: 'GitHub',
      descripcion: '@4k1k0',
      url: 'https://github.com/4k1k0'
    },
    {
      nombre: 'Last.fm',
      descripcion: 'wakogitmu',
      url: 'https://www.last.fm/user/wakogitmu'
    },
    {
      nombre: 'PSN',
      descripcion: 'wakogitv'
    },
    {
      nombre: 'Mastodon',
      descripcion: '@wako',
      url: 'https://mstdn.social/@wako'
    },
    {
      nombre: 'Dev.to',
      descripcion: '4k1k0',
      url: 'https://dev.to/4k1k0'
    },
    {
      nombre: 'Nintendo',
      descripcion: 'SW-7022-9992-7512',
    },
    {
      nombre: 'Discord',
      descripcion: 'wako#7142',
    },
    {
      nombre: 'Steam',
      descripcion: 'akko_lambda',
    },
  ].sort((a, b) => a.nombre.localeCompare(b.nombre, undefined, { sensitivity: 'base' }));

}
