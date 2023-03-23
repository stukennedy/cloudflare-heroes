import { Hero } from '@model/heroes';

export default (hero: Hero) => /*html*/ `
  <form>
    <h2 class="text-2xl text-black mb-4">${hero.name.toLocaleUpperCase()} Details</h2>
    <div class="text-black mb-1"><span>id: </span>${hero.id}</div>
    <div class="mb-6">
      <label class="text-secondary font-bold" for="hero-name">Hero name: </label>
      <input 
        id="hero-name" 
        class="border-neutral-800 border w-48 p-2 pl-2 text-neutral-800 text-md"
        name="name" 
        value="${hero.name}" 
        placeholder="Hero name"/>
    </div>
    <a class="nav-button" href="/">go back</a>
    <button 
      class="nav-button"
      hx-patch="/heroes/${hero.id}" 
      hx-trigger="click" 
      hx-target="form" 
      hx-swap="outerHTML">save</button>
  </form>
  `;
