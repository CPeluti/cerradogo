<script lang="ts">    
    import { browser } from "$app/environment";
    import type { Hunt } from "src/interfaces/Hunt";
    export let data: {id: string, hunt: Hunt, user: any};
    import HuntMap from "../../../components/HuntMap.svelte"
    let progress = 0
    if(browser){
        const hunts = data.user['hunts']
        const aux = hunts.find((el: {progress: number, huntId: string}) => data.id === el.huntId)
        progress = aux? aux.progress : progress
    }
</script>
<HuntMap hunt={data.hunt} id={data.id} progress={progress}/>