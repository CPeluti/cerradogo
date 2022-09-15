<script lang="ts">
    import { goto } from '$app/navigation'
    import type { Hunt } from 'src/interfaces/Hunt';
    import ProgressBar from "./ProgressBar.svelte";
    export let hunt: Hunt;
    export let progress: number;
    const image = `data:${hunt.img?.fileType};base64,${hunt.img?.file}`
    let intoHunt = async () => {
        await goto(`/hunt/${(hunt as Hunt)["_id"]}`)
    }
</script>

<main>
    <div class="hunt-container" on:click={async ()=>{await intoHunt()}}>
        <img class="img" src={image} alt="Foto"/>
        <div class="container">
            <div class="name">{hunt.name}</div>
            <div>
                <div class="footer">
                    <div class="progress-frac">Pistas: {progress*hunt.totalQuestions}/{hunt.totalQuestions}</div>
                </div>
            </div>
            <ProgressBar color="#3FE106" progress={progress}/>
        </div>
    </div>
</main>
<style>
    .img{
        margin-right: 15px;
        width: 70px;
        height: 70px;
        border-radius: 100px;
    }
    .footer{
        display: flex;
        font-size: 10px;
        font-family: 'Roboto';
        justify-content: space-between;
    }
    .container{
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        justify-content: space-around;
    }
    .progress-frac{
        left: 10px;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        text-transform: uppercase;
        color: #929292;
    }
    .hunt-container{
        display: flex;
        height: 70px;
        width: 300px;
        cursor: pointer;
        justify-content: center;
        align-items: center;
        
    }
    .name{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        text-transform: uppercase;
        color: #000000;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
</style>