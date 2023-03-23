import Hero from '@components/Hero';
import HeroDetails from '@components/HeroDetails';
import HeroError from '@components/HeroError';
import Messages from '@components/Messages';
import { html, fragment } from '@lib/html';
import heroes from '@model/heroes';
import messages from '@model/messages';

export const onRequestDelete: PagesFunction = async ({ params }) => {
  const id = Number(params.id);
  const heroesData = await heroes.deleteHero(id);
  const allMessages = await messages.addMessage(`deleted hero id=${id}`);
  return fragment(heroesData.map(Hero).join('') + Messages(allMessages));
};

export const onRequestPatch: PagesFunction = async ({ request, params }) => {
  const id = Number(params.id);
  const data = await request.formData();
  const name = data.get('name') as string;
  const hero = await heroes.updateHero(id, name);
  const allMessages = await messages.addMessage(`updated hero id=${id}`);
  return fragment(HeroDetails(hero) + Messages(allMessages));
};

export const onRequestPost: PagesFunction = async ({ params }) => {
  const id = Number(params.id);
  const hero = await heroes.getHero(id);
  if (hero) {
    const allMessages = await messages.addMessage(`fetched hero id=${id}`);
    return fragment(HeroDetails(hero) + Messages(allMessages));
  } else {
    const allMessages = await messages.addMessage(
      `failed to fetch hero id=${id}`
    );
    return fragment(HeroError() + Messages(allMessages));
  }
};

export const onRequestGet: PagesFunction = async ({ params }) => {
  return html(/*html*/ `
    <div hx-post="/heroes/${params.id}" hx-trigger="load">Loading...</div>
  `);
};
