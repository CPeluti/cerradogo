<script lang="ts">    
    /** @type {import('./$types').PageData} */
    export let data;
    import HuntMap from "../../../components/HuntMap.svelte"
    import type { Hunt } from "src/interfaces/Hunt";
    const hunts = {name: data.hunt.name,
        location: "string",
        latlong: [-15.884039920347867, -48.01590311958394]
    }
    const progress = 7/9*100
</script>
<HuntMap hunt={data.hunt} id={data.id}/>