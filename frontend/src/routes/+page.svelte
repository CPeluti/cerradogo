
<script lang="ts">
    import type { User } from '../interfaces/User'
    import {userStore} from '../stores/store'
    import HuntCard from "../components/HuntCard.svelte";
    import Perfil from "../components/Perfil.svelte";
    const promise = fetch("http://localhost:3030/hunt", {method: "GET"}).then(res => res.json())
    
    let userValue: User
    userStore.subscribe(value=>{
        userValue = value
    })
    let huntProgress = (hunt): number => {
        hunt = userValue.hunts.find(el => el.huntId === hunt['_id'])
        if(hunt){
            return hunt.progress
        } else {
            return 0
        }
    }
</script>

<div class="container">
    <div style="display: flex; flex-direction: column;">
        <div id="perfil">
            <Perfil user={userValue}/>
        </div>
        <div style="margin-top: 150px;">
            {#await promise then data}
            {#each data as hunt}
            <div style="margin-bottom: 20px;">
                <HuntCard hunt={hunt} progress={huntProgress(hunt)}/>
            </div>
            {/each}
            
            {/await}
        </div>
    </div>
</div>

<style>
    #perfil{
        position: fixed;
        height: 120px;
        z-index: 999;
    }
    .container{
        display: flex;
        justify-content: center;
        justify-items: center;
        width: 100%;
        height: 100%;
    }
</style>