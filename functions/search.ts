import SearchResult from '@components/SearchResult';
import { fragResponse } from '@lib/html';
import heroes from '@model/heroes';

export const onRequestPost: PagesFunction = async ({ request }) => {
  const data = await request.formData();
  const query = data.get('query') as string;
  if (query === '') {
    return fragResponse('');
  }
  const results = await heroes.findHeroes(query);
  return fragResponse(results.map(SearchResult).join(''));
};
