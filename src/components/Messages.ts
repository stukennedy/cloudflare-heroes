export default (messages: string[]) => /*html*/ `
  <div id="messages" hx-swap-oob="true">
    <h2 class="text-2xl text-red-800 mb-8">Messages</h2>
    <button hx-delete="/messages" hx-target="#messages" class="nav-button mb-3">Clear messages</button>
    <ul class="text-black">
      ${messages.map((message) => `<li>HeroService: ${message}</li>`).join('')}
    </ul>
  </div>
`;
