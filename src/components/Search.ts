import { html } from '@lib/html';

export default () => {
  return html`
  <div id="search-component">
  <label class="label text-lg font-bold text-black" for="search-box">Hero Search</label>
  <input 
    type="text" 
    name="query"
    class="border-neutral-500 border w-96 p-2 pl-2 text-neutral-700 text-sm rounded-sm"
    hx-post="/search"
    hx-trigger="keyup changed delay:500ms"
    hx-target="#search-results"
    placeholder="Search..."
  />
  <ul id="search-results"></ul>
</div>`;
};
