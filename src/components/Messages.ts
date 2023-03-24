export default (messages: string[]) => /*html*/ `
  <div id="messages" hx-swap-oob="true">
    <h2 class="text-2xl font-normal text-red-700 mb-8">Messages</h2>
    <button hx-delete="/messages" hx-target="#messages" class="nav-button mb-2">Clear messages</button>
    <ul class="text-black">
      ${messages.map((message) => `<li>HeroService: ${message}</li>`).join('')}
    </ul>
  </div>
`;
