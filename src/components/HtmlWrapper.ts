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
        <div class="mt-4">
          <div id="messages" hx-post="/messages" hx-trigger="load"></div>
        </div>
      </div>
    </div>
  </body>
</html>
`;
};
