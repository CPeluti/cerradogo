<script lang="ts">    
    /** @type {import('./$types').PageData} */
    export let data;
    import HuntMap from "../../../components/HuntMap.svelte"
    import type { Hunt } from "src/interfaces/Hunt";
    const hunts = {name: data.hunt.name,
        location: "string",
        latlong: data.hunt.latlong
    }
    import {userStore} from '../../../stores/store'
    let progress = 0
    if(browser){
        let userValue: User
        userStore.subscribe(value=>{
            userValue = value
        })
        const aux = userValue.hunts?.find(el => data.id === el.huntId)
        progress = aux? aux.progress : progress
    }
    import type { User } from "../../../interfaces/User";
import { browser } from "$app/environment";
    
</script>
<HuntMap hunt={data.hunt} id={data.id} progress={progress}/>