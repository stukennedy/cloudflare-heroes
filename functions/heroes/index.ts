import Hero from '@components/Hero';
import Messages from '@components/Messages';
import { html, fragResponse, htmlResponse } from '@lib/html';
import heroes from '@model/heroes';
import messages from '@model/messages';

export const onRequestPut: PagesFunction = async ({ request }) => {
  const data = await request.formData();
  const name = data.get('name') as string;
  const heroesData = await heroes.addHero(name);
  const allMessages = await messages.addMessage(`added hero: ${name}`);
  return fragResponse(heroesData.map(Hero).join('') + Messages(allMessages));
};

export const onRequestPost: PagesFunction = async ({ request }) => {
  const heroesData = await heroes.getHeroes();
  const allMessages = await messages.addMessage('fetched heroes');
  return fragResponse(heroesData.map(Hero).join('') + Messages(allMessages));
};

export const onRequestGet: PagesFunction = async () => {
  return htmlResponse(html`
  <h2 class="text-2xl text-black mb-2">My Heroes</h2>

  <form>
    <label class="label text-black mb-1 pl-0" for="new-hero">Hero name: </label>
    <input class="border-neutral-500 border w-full p-2 text-neutral-800 text-sm mb-8 rounded-sm" id="new-hero" name="name" />

    <div 
      class="hero-button"
      hx-put="/heroes" 
      hx-trigger="click" 
      hx-target="#heroes-list">
      Add hero
    </div>
  </form>

  <ul class="grid gap-2 my-8" id="heroes-list" class="heroes" hx-post="/heroes" hx-trigger="load">
    Loading...
  </ul>
  `);
};
