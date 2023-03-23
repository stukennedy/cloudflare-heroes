import Hero from '@components/Hero';
import Messages from '@components/Messages';
import { fragment, html } from '@lib/html';
import heroes from '@model/heroes';
import messages from '@model/messages';

export const onRequestPut: PagesFunction = async ({ request }) => {
  const data = await request.formData();
  const name = data.get('name') as string;
  const heroesData = await heroes.addHero(name);
  const allMessages = await messages.addMessage(`added hero: ${name}`);
  return fragment(heroesData.map(Hero).join('') + Messages(allMessages));
};

export const onRequestPost: PagesFunction = async ({ request }) => {
  const heroesData = await heroes.getHeroes();
  const allMessages = await messages.addMessage('fetched heroes');
  return fragment(heroesData.map(Hero).join('') + Messages(allMessages));
};

export const onRequestGet: PagesFunction = async () => {
  return html(/*html*/ `
  <h2 class="text-2xl text-black mb-4">My Heroes</h2>

  <form>
    <label class="label text-black" for="new-hero">Hero name: </label>
    <input class="border-black border w-full p-1 pl-2 text-neutral-800 text-sm mb-8 rounded-md" id="new-hero" name="name" />

    <div 
      class="hero-button"
      hx-put="/heroes" 
      hx-trigger="click" 
      hx-target="#heroes-list">
      Add hero
    </div>
  </form>

  <ul class="grid gap-2 mt-8" id="heroes-list" class="heroes" hx-post="/heroes" hx-trigger="load">
    Loading...
  </ul>
  `);
};
