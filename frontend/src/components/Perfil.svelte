<script lang="ts">
    import ProgressBar from "./ProgressBar.svelte"
    export let user;
    const image = `data:${user.img.fileType};base64,${user.img.file}`
    console.log(image)
</script>
<div class="container">
    <div class="icon">
        <img src="{image}" alt="Foto de perfil">
        <ProgressBar color="#06FFF0" progress={user.xp}/>
    </div>
    <div class="text">
        <span>
            <h1>
                {user.nickname}
            </h1>
        </span>
        <span>
            <h2>lvl: {user.lvl}</h2>
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
        margin: 0;
        padding: 0;
        font-size: 24px;
    }
    
    h2{
        margin: 0;
        padding: 0;
        font-size: 12px;
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
    /*#img_temp{
        margin-bottom: 10px;
        background-color: gray;
        width: 50px;
        height: 50px;
        border-radius: 100%;
    }*/
    .container{
        padding-top: 20px;
        display: flex;
        background-color: white;
        width: 360px;
        height: 100%;
    }
</style>