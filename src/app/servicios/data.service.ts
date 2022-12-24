import { Injectable } from '@angular/core';
import { Social } from '../models/social.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  specs: Social[] = [
    {
      nombre: 'Twitter',
      descripcion: '@akkonomi',
      url: 'https://twitter.com/akkonomi'
    },
    {
      nombre: 'LinkedIn',
      descripcion: 'Rodrigo Patiño',
      url: 'https://www.linkedin.com/in/rodrigo-patino-dev/'
    },
    {
      nombre: 'Instagram',
      descripcion: '@haskellcatalv',
      url: 'https://www.instagram.com/haskellcatalv'
    },
    {
      nombre: 'GitHub',
      descripcion: '@4k1k0',
      url: 'https://github.com/4k1k0'
    },
    {
      nombre: 'Redbubble',
      descripcion: '4k1k0-zyx',
      url: 'https://www.redbubble.com/es/people/4k1k0-zyx/shop'
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
      nombre: 'Tumblr',
      descripcion: 'Stuff',
      url: 'https://sillyinfluencerwhore-blog.tumblr.com/'
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
  ];

  constructor() {
    this.specs.sort((a: Social, b: Social) => a.nombre.toLowerCase() > b.nombre.toLowerCase() ? 1 : -1);
  }
}
