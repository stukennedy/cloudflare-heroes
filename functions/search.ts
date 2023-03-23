import SearchResult from '@components/SearchResult';
import { fragment } from '@lib/html';
import heroes from '@model/heroes';

export const onRequestPost: PagesFunction = async ({ request }) => {
  const data = await request.formData();
  const query = data.get('query') as string;
  if (query === '') {
    return fragment('');
  }
  const results = await heroes.findHeroes(query);
  return fragment(results.map(SearchResult).join(''));
};
