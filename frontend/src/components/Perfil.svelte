<script lang="ts">
    import ProgressBar from "./ProgressBar.svelte"
    export let nome: string
    const progress = 30
</script>
<div>
    {nome}
    <ProgressBar progress={progress}/>
</div>