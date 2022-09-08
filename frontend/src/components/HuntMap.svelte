<script lang="ts">
    import { goto } from '$app/navigation'
    export let hunt;
    export let id;
    import ProgressBar from "../components/ProgressBar.svelte";
    const imgUrl = new URL('../images/google_maps.jpg', import.meta.url).href
    const progress = 7/9*100;
</script>
<main>
    <div class="container">
        <div id="nome_caca">
            {hunt.name}
        </div>
        <ProgressBar progress={progress}/>
        <div id="pct">
            7/9
        </div>
        <img id="mapa" src={imgUrl} alt="mapa">
        <!--div id="information">{hunt.latlong[0]} {hunt.latlong[1]}</div-->
        <div>
            <button id="perfil" class="secondary" disabled>perfil</button>
            <button id="dica" class="secondary">dica</button>
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
