# Cloudflare + HTMX vs Angular

## port of the Angular tutorial "Heroes" using Cloudflare Pages and HTMX

[Original Angular Tutorial can be found here](https://angular.io/tutorial/tour-of-heroes)

Cloudflare Pages provides a folder-based routing structure to serve endpoints called `Functions`
We can use these endpoints to create a JAMStack version of the Angular tutorial as a demonstration of the simplicity of this approach.

## Getting Started

### install npm depencencies

```bash
npm i
```

### Run the local dev version

in one terminal run the tailwind compiler in watch mode

```bash
npm run tailwind:watch
```

in another terminal start the webapp

```bash
npm start
```

### Deploy to Cloudflare

```bash
npm run deploy
```

## Utility functions

### HtmlWrapper

This is just a function that accepts some `dom` string and returns the high level HTML needed to display the page e.g.

```typescript
export default (children: string) => {
  const title = 'Tour of Heroes';
  return /*html*/ `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title}</title>
    <link href="/styles.css" rel="stylesheet" />
    <script src="/htmx.min.js"></script>
    <script src="/_hyperscript.min.js"></script>   
  </head>  
  <body class="bg-white h-screen">
    <div class="flex justify-center pt-16">
      <div class="justify-left w-full px-2 md:w-100">
        <h1 class="text-4xl font-bold text-primary mb-3">${title}</h1>
        <nav class="flex mb-6 gap-3">
          <div><a class="nav-button" href="/">Dashboard</a></div>
          <div><a class="nav-button" href="/heroes">Heroes</a></div>
        </nav>  
        ${children}
        <div class="mt-8">
          <div id="messages" hx-post="/messages" hx-trigger="load"></div>
        </div>
      </div>
    </div>
  </body>
</html>
`;
};
```

### html & fragment functions

These are used when either returning a full page of HTML (e.g. for a page `GET`) or a fragment of HTML (e.g. a `POST` response).
In HTMX, all endpoints return HTML; not JSON data. This way the client doesn't need to know anything about business logic or state.

## Endpoint patterns

### GET

```typescript
// functions/index.ts

export const onRequestPost: PagesFunction = async () => {
  const title = await getTitle();
  return fragment(/*html*/ `<h2>${title}</h2>`);
};

export const onRequestGet: PagesFunction = async () => {
  return html(/*html*/ `
    <h1>Welcome</h1>
    <div hx-post="/" hx-trigger="load">Loading title...</div>
  `);
};
```

This pattern returns a page immediately from the `GET` request that has a loading state. The `html` wrapper wraps the response in the full HTML defined in our `HtmlWrapper` component. The HTMX in this page launches a `POST` request to the same REST endpoint when the page has loaded, this is handled by the handler function delared above (i.e. `onRequestPost`). The `POST` responds with some HTML containing the title after getting it asynchronously, it is wrapped in a `fragment` (i.e. just a partial of HTML, not the whole page). The tag that requested this post puts the HTML response in its innerHtml; replacing `Loading title...`.
