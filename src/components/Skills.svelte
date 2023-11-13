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
  <div class="bg-[#171717] flex justify-between py-5">
    {#each skills as skill}
      <div>{skill}</div>
    {/each}
  </div>
</main>
