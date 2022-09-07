
<script lang="ts">
    /** @type {import('./$types').PageLoad} */
    export function load(event) {
        return {
            some: 'data'
        };
    }
    import ProgressBar from "../components/ProgressBar.svelte";
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data)
    // const hunts:Array<Hunt> = 
    //     [{name: "string",
    //     location: "string",
    //     latlong: [13821839128, -21319038]}, {name: "string2",
    //     location: "string2",
    //     latlong: [1382183239128, -213190238]}, {name: "string",
    //     location: "string",
    //     latlong: [13821839128, -21319038]}, {name: "string2",
    //     location: "string2",
    //     latlong: [1382183239128, -213190238]}, {name: "string",
    //     location: "string",
    //     latlong: [13821839128, -21319038]}, {name: "string2",
    //     location: "string2",
    //     latlong: [1382183239128, -213190238]}, {name: "string",
    //     location: "string",
    //     latlong: [13821839128, -21319038]}, {name: "string2",
    //     location: "string2",
    //     latlong: [1382183239128, -213190238]}, {name: "string",
    //     location: "string",
    //     latlong: [13821839128, -21319038]}, {name: "string2",
    //     location: "string2",
    //     latlong: [1382183239128, -213190238]}, {name: "string",
    //     location: "string",
    //     latlong: [13821839128, -21319038]}, {name: "string2",
    //     location: "string2",
    //     latlong: [1382183239128, -213190238]}]
    // const progress = 7/9*100
</script>

<!-- {#each hunts as hunt}
    <HuntCard hunt={hunt}/>
    <ProgressBar progress={progress}/>

{/each} -->
