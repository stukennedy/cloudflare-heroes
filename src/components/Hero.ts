import { Hero } from '@model/heroes';

export default (hero: Hero) => /*html*/ `
  <a href="/heroes/${hero.id}" class="w-56">
    <li class="w-full bg-neutral-200 hover:bg-neutral-300 hover:left-0.5 flex rounded-md relative">
      <div class="
        h-full 
        py-2 px-3 
        bg-secondary 
      text-neutral-100 text-sm 
        rounded-l-md">
        ${hero.id}
      </div>
      <div class="flex justify-between w-full ">
        <div class="pt-2 pl-3 text-neutral-800">${hero.name}</div>
        <div 
          class="justify-right bg-white m-1.5 px-2 rounded-md text-neutral-800" 
          title="delete hero" 
          hx-delete="/heroes/${hero.id}" 
          hx-target="#heroes-list">
          x
        </div>
      </div>
    </li>
  </a>
  `;
