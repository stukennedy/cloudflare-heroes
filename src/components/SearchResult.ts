import { Hero } from '@model/heroes';

export default (hero: Hero) => /*html*/ `
  <a href="/heroes/${hero.id}">
    <li class="
    border-neutral-800 
      border-b border-l border-r 
      w-96 
      p-2 pl-2
    text-neutral-800 
      text-sm 
      cursor-pointer 
      hover:bg-secondary hover:text-white">
      ${hero.name}
    </li>
  </a>`;
