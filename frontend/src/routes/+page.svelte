<script lang="ts">
    import HuntCard from "../components/HuntCard.svelte"
    import type { Hunt } from "src/interfaces/Hunt";
    import ProgressBar from "../components/ProgressBar.svelte";
    const hunts:Array<Hunt> = 
        [{name: "string",
        location: "string",
        latlong: [13821839128, -21319038]}, {name: "string2",
        location: "string2",
        latlong: [1382183239128, -213190238]}, {name: "string",
        location: "string",
        latlong: [13821839128, -21319038]}, {name: "string2",
        location: "string2",
        latlong: [1382183239128, -213190238]}, {name: "string",
        location: "string",
        latlong: [13821839128, -21319038]}, {name: "string2",
        location: "string2",
        latlong: [1382183239128, -213190238]}, {name: "string",
        location: "string",
        latlong: [13821839128, -21319038]}, {name: "string2",
        location: "string2",
        latlong: [1382183239128, -213190238]}, {name: "string",
        location: "string",
        latlong: [13821839128, -21319038]}, {name: "string2",
        location: "string2",
        latlong: [1382183239128, -213190238]}, {name: "string",
        location: "string",
        latlong: [13821839128, -21319038]}, {name: "string2",
        location: "string2",
        latlong: [1382183239128, -213190238]}]
    const progress = 0.9
</script>
{#each hunts as hunt}
    <HuntCard hunt={hunt}/>
    <ProgressBar progress={50}/>

{/each}
