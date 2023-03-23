import HtmlWrapper from '@components/HtmlWrapper';

const INIT = {
  headers: {
    'content-type': 'text/html;charset=UTF-8',
  },
};

export const html = (dom: string) => {
  return new Response(HtmlWrapper(dom), INIT);
};

export const fragment = (dom: string) => {
  return new Response(dom, INIT);
};
