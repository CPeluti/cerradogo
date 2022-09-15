<script lang="ts">
    import type { User } from '../interfaces/User'
    import ProgressBar from "./ProgressBar.svelte"
    export let user: User
    const img = `data:${user?.img?.fileType};base64,${user?.img?.file}`
</script>
<div class="container">
    <div class="icon">
        {#if user?.img}
            <img id="img_temp" alt="profile" src={img}/>
        {:else}
            <div id="img_temp"></div>
        {/if}
        <ProgressBar color="#06FFF0" progress={(user?.experience%100)/100}/>
    </div>
    <div class="text">
        <span>
            <h1>
                {user?.nickname}
            </h1>
        </span>
        <span>
            <h2>lvl: {Math.floor(user?.experience/100)}</h2>
        </span>
    </div>
</div>
<style>
    .icon{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    h1{
        font-family: 'Roboto';
        margin: 0;
        padding: 0;
        font-size: 24px;
    }
    
    h2{
        margin: 0;
        padding: 0;
        font-size: 12px;
        font-family: 'Roboto';
        color: #A8A8A8;
        text-transform: uppercase;
    }
    .text{
        padding-left: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        justify-items: center;
    }
    #img_temp{
        margin-bottom: 10px;
        background-color: gray;
        width: 50px;
        height: 50px;
        border-radius: 100%;
    }
    .container{
        padding-top: 20px;
        display: flex;
        background-color: white;
        width: 360px;
        height: 100%;
    }
</style>