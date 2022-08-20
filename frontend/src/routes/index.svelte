<script lang="ts">
    import type Collectables from "src/interfaces/Colecoes";
    let colectable: Collectables = {name: "Daviany", rarity: "Raro", about: "Onde o Judas se perdeu"}

</script>
<h1>Welcome {colectable.name}</h1>
<p>Visit {colectable.rarity} <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the {colectable.about}</p>
