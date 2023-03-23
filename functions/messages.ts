import Messages from '@components/Messages';
import { fragment } from '@lib/html';
import messages from '@model/messages';

export const onRequestDelete: PagesFunction = async () => {
  await messages.clearMessages();
  return fragment('');
};

export const onRequestPost: PagesFunction = async () => {
  const results = await messages.getMessages();
  return results.length ? fragment(Messages(results)) : fragment('');
};
