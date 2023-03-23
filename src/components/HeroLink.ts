import { Hero } from '@model/heroes';

export default (hero: Hero) =>
  /*html*/ `<div><a class="hero-link w-48" href="/heroes/${hero.id}">${hero.name}</a></div>`;
