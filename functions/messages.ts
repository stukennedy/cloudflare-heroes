import Messages from '@components/Messages';
import { fragResponse } from '@lib/html';
import messages from '@model/messages';

export const onRequestDelete: PagesFunction = async () => {
  await messages.clearMessages();
  return fragResponse('');
};

export const onRequestPost: PagesFunction = async () => {
  const results = await messages.getMessages();
  return results.length ? fragResponse(Messages(results)) : fragResponse('');
};
