<script lang="ts">
    import ProgressBar from "./ProgressBar.svelte";
    export let hunt;
    const image = `data:${hunt.img.fileType};base64,${hunt.img.file}`
    
</script>

<main>
    <div class="hunt-container" on:click={()=>{window.location.replace(`/hunt/${hunt["_id"]}`)}}>
        <img class="img" src={image} alt="Foto"/>
        <div class="container">
            <div class="name">{hunt.name}</div>
            <div>
                <div class="footer">
                    <div class="progress-frac">Pistas: 1/9</div>
                    <div class="deadline">Limite: 30/02/2023</div>
                </div>
            </div>
            <ProgressBar color="#3FE106" progress={1/4}/>
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
        font-size: 14px;
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
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        text-transform: uppercase;
        color: #000000;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .deadline{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        text-transform: uppercase;
        color: #929292;
    }

</style>