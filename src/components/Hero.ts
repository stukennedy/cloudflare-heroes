import { Hero } from '@model/heroes';

export default (hero: Hero) => /*html*/ `
  <li class="w-56 bg-neutral-200 hover:bg-neutral-300 hover:left-0.5 flex rounded-md relative cursor-pointer">
    <div class="
      h-full 
      py-2 px-3 
      bg-secondary 
    text-neutral-100 text-sm 
      rounded-l-md"
      hx-get="/heroes/${hero.id}" 
      hx-push-url="true"
      hx-target="body"
      >
      ${hero.id}
    </div>
    <div class="flex justify-between w-full">
      <div 
        hx-get="/heroes/${hero.id}" 
        hx-push-url="true"
        hx-target="body"
        class="pt-2 pl-3 text-neutral-800">
        ${hero.name}
      </div>
      <div 
        class="
          justify-right 
          text-md 
        bg-white text-neutral-800 hover:text-white hover:bg-neutral-600
          m-1.5 mr-2
          px-2.5 h-6
          rounded" 
        title="delete hero" 
        hx-delete="/heroes/${hero.id}" 
        hx-target="#heroes-list">
        x
      </div>
    </div>
  </li>
  `;
