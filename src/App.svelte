<script>
  import grabakeyLogo from "/logo.svg";
  import Counter from "./lib/Counter.svelte";
</script>

<main>
  <div>
    <a href="https://grabakey.org" target="_blank" rel="noreferrer">
      <img src={grabakeyLogo} class="logo" alt="Grabakey Logo" />
    </a>
  </div>
  <h1>Grabakey</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a
      href="https://github.com/sveltejs/kit#readme"
      target="_blank"
      rel="noreferrer">SvelteKit</a
    >, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #12b09baa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
