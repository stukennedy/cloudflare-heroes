import HeroLink from '@components/HeroLink';
import Messages from '@components/Messages';
import Search from '@components/Search';
import { fragment, html } from '@lib/html';
import heroes from '@model/heroes';
import messages from '@model/messages';

export const onRequestPost: PagesFunction = async () => {
  const heroesData = await heroes.getHeroes();
  const heroesSlice = heroesData.slice(1, 5);
  const allMessages = await messages.addMessage('fetched heroes');
  return fragment(heroesSlice.map(HeroLink).join('') + Messages(allMessages));
};

export const onRequestGet: PagesFunction = async () => {
  return html(/*html*/ `
    <h2 class="text-2xl text-black text-center mb-3">Top Heroes</h2>
    <div class="flex gap-8 p-4" hx-post="/" hx-trigger="load">
      Loading...
    </div>
    ${Search()}
  `);
};
