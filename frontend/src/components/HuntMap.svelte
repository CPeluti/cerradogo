<script lang="ts">
    import { goto } from '$app/navigation'
    import { NotificationDisplay, notifier } from '@beyonk/svelte-notifications'
    import type { Hunt } from 'src/interfaces/Hunt';
    import ProgressBar from "../components/ProgressBar.svelte";
    export let hunt: Hunt;
    export let id: string;
    export let progress: number;
    function shuffle(a: string[]) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    let dicas = ()=>{
        if(hunt.tips?.length){
            let tips = shuffle(hunt.tips)
            notifier.info(tips[0], 10000)
        } else {
            notifier.info('Não há dicas disponíveis atualmente.', 30)
        }
    }
</script>
<main>
    <NotificationDisplay/>
    <div class="container">
        <div id="nome_caca">
            {hunt.name}
        </div>
        <ProgressBar progress={progress} color="#3FE106"/>
        <div id="pct">
            {progress*hunt.totalQuestions}/{hunt.totalQuestions}
        </div>
        <img id="mapa" src="/images/google_maps.jpg" alt="mapa">
        <div>
            <button id="perfil" class="secondary" disabled>perfil</button>
            <button id="dica" on:click={dicas} class="secondary">dica</button>
            <button id="coletar" on:click={async () => { await goto(`/hunt/${id}/question`)}}>coletar</button>
            <button id="menu" class="secondary" on:click={async () => { await goto(`/`)}}>menu</button>
            <button id="podio" class="secondary" disabled>podio</button>
        </div>
    </div>
</main>

<style>
    main{
        text-transform: uppercase;
        width: 100%;
        display: flex;
        justify-content: center;
        justify-items: center;

    }
    .container{
        width: 360px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        justify-items: center;
    }
    button{
        text-transform: uppercase;
        cursor: pointer;
        width: 90px;
        height: 90px;
        border-radius: 100%;
        border-width: 0;
        font-size: 14px;
        font-family: 'Roboto';
        background-color: #1A73E9;
        color: white;
    }
    button:disabled{
        cursor:auto;
        filter:grayscale(100%)
    }
    .secondary {
        width: 60px;
        height: 60px;
    }
    #coletar {
        background-color: #AE1C93;
    }

    #mapa{
        margin-bottom: 50px;
        width: 100%;
        height: 310px;
        padding: 0px;
    }
    #nome_caca{
        text-align: center;
        padding: 10px;
        font-family: 'Roboto';
        font-weight: 500;
        font-size: 20px;
        font-style: normal;
    }
    #pct{
        text-align: center;
        padding: 10px;
        font-family: 'Roboto';
        font-weight: 500;
        font-size: 20px;
        font-style: normal;

    }
</style>
