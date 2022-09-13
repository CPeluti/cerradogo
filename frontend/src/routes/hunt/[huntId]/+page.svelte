<script lang="ts">    
    import { browser } from "$app/environment";
    import type { Hunt } from "src/interfaces/Hunt";
    export let data: {id: string, hunt: Hunt};
    import HuntMap from "../../../components/HuntMap.svelte"
    import type { User } from "src/interfaces/User";
    import {userStore} from '../../../stores/store'
    let progress = 0
    if(browser){
        let userValue: User | any = {}
        userStore.subscribe(value=>{
            userValue = value
        })
        const hunts = userValue['hunts']
        const aux = hunts.find((el: {progress: number, huntId: string}) => data.id === el.huntId)
        progress = aux? aux.progress : progress
    }
</script>
<HuntMap hunt={data.hunt} id={data.id} progress={progress}/>