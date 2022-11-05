<script>
  import svelteLogo from "../assets/svelte.svg"

  let count = 0
  const increment = () => {
    count += 1
  }
</script>

<div class='project'>
  <img src={svelteLogo} alt="Svelte icon">
  <p>This is a project</p>
</div>

<style>
  .project {
    width: 10em;
    padding-top: 1em;
    background-color: #363636;
    border: 0.1em solid black;
    border-radius: 4px;
  }
</style>