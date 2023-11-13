<script>
  import "../app.css";
</script>

<main class="max-w-[1440px] mx-auto px-4 md:px-0 font-dmSans-regular">
  <slot />
</main>

<style>
  main {
    min-height: 100vh;
    max-height: 100vh;
    overflow: hidden;
  }
</style>
