<script>
  let skills = [
    "Web3 Visual Designer.",
    "Web3 Product Designer.",
    "Web3 Visual Designer.",
    "Web3 Visual Designer.",
    "Web3 Visual Designer.",
    "Web3 Visual Designer.",
  ];
</script>

<main class="pt-12">
  <div class="marquee bg-[#171717] py-5">
    <div class="marquee-content">
      <div class="flex justify-between gap-x-20">
        {#each skills as skill}
          <div class="">{skill}</div>
        {/each}
      </div>
    </div>
  </div>
</main>

<style>
  .marquee {
    overflow: hidden;
    white-space: nowrap;
    box-sizing: border-box;
  }

  .marquee-content {
    display: inline-block;
    padding-left: 100%;
    animation: scroll-left 15s linear infinite;
  }

  @keyframes scroll-left {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
</style>
