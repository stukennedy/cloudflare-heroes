import HtmlWrapper from '@components/HtmlWrapper';

const INIT = {
  headers: {
    'content-type': 'text/html;charset=UTF-8',
  },
};

export const htmlResponse = (dom: string) => {
  return new Response(HtmlWrapper(dom), INIT);
};

export const fragResponse = (dom: string) => {
  return new Response(dom, INIT);
};

export const html = String.raw;