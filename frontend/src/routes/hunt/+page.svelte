<script lang="ts">
    import HuntMap from "../../components/HuntMap.svelte"
    import type { Hunt } from "src/interfaces/Hunt";
    const hunts:Array<Hunt> = 
        [{name: "string",
        location: "string",
        latlong: [-15.884039920347867, -48.01590311958394]}]
</script>
{#each hunts as hunt}
    <HuntMap hunt={hunt}/>
{/each}