<script>
    import Perfil from "../../components/Perfil.svelte"
    const promise = fetch("http://localhost:3030/user/631949faa5fe0e93b9d82e19", {method: "GET"}).then(res => res.json())
</script>
{#await promise then data}
{#each data as usuario}
    <Perfil user={usuario}/>
{/each}
{/await}