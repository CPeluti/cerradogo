
<script lang="ts">
    import HuntCard from "../components/HuntCard.svelte";
    import Perfil from "../components/Perfil.svelte";
    const promise = fetch("https://cerradogo-server.herokuapp.comhunt", {method: "GET"}).then(res => res.json())
    export let data: any;
    let huntProgress = (hunt: any): number => {
        const hunts = data.user ['hunts']
        hunt = hunts.find((el: {progress: number, huntId: string}) => el.huntId === hunt['_id'])
        if(hunt){
            return hunt.progress
        } else {
            return 0
        }
    }
</script>
{#if data.user}
    <div class="container">
        <div style="display: flex; flex-direction: column;">
            <div id="perfil">
                <Perfil user={data.user}/>
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
{/if}

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