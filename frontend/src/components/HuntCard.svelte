<script lang="ts">export let hunt;</script>

<main>
    <div class="hunt-container">
        <a href="#!">
            <img class="img" src="http://127.0.0.1:8887/cacada_1.png" alt="Foto"/>
        </a>
        <div class="space">
            <div class="name">{hunt.name}</div>
            <div class="progress-frac">Pistas: 1/9</div>
        </div>
            <div class="deadline">Limite: 30/02/2023</div>
    </div>
</main>
<style>
    .progress-frac{
        position: relative;
        left: 10px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        text-transform: uppercase;
        color: #929292;
    }
    .hunt-container{
        display: flex;
        margin: 4px;
        width: 100%;
    }
    .name{
        margin-top: 25px;
        margin-left: 10px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        text-transform: uppercase;
        color: #000000;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .deadline{
        margin-left: auto;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        text-transform: uppercase;
        color: #929292;
        margin-top: 40px;
    }

</style>