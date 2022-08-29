<script lang="ts">
    import HuntCard from "../components/HuntCard.svelte"
    import type { Hunt } from "src/interfaces/Hunt";
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
</script>
{#each hunts as hunt}
    <HuntCard hunt={hunt}/>

{/each}
