<script lang="ts">export let hunt;
    import ProgressBar from "../components/ProgressBar.svelte";
    const progress = 7/9*100;
</script>
<main>
    <div id="nome_caca">
        {hunt.name}
    </div>
    <ProgressBar progress={progress}/>
    <div id="pct">
        7/9
    </div>
    <img id="mapa" src="http://127.0.0.1:8887/google_maps.jpg" alt="mapa">
    <!--div id="information">{hunt.latlong[0]} {hunt.latlong[1]}</div-->
    <div class="scrollmenu">
        <img src="http://127.0.0.1:8887/perfil.png" alt="botao perfil">
        <img src="http://127.0.0.1:8887/dica.png" alt="botao dica">
        <img src="http://127.0.0.1:8887/coletar.png" alt="botao coletar">
        <img src="http://127.0.0.1:8887/menu.png" alt="botao menu">
        <img src="http://127.0.0.1:8887/podio.png" alt="botao podio">
    </div>

    <style>
        div.scrollmenu {
            background-color: white;
            overflow: auto;
            white-space: nowrap;
        }

        div.scrollmenu img {
            display: inline-block;
            color: white;
            text-align: center;
            padding: 14px;
            padding-left:152px;
            text-decoration: none;
            transition: filter 0.5s;
        }

        div.scrollmenu img:hover {
            filter: brightness(150%);
            
        }
        #mapa{
            width: 100%;
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


</main>