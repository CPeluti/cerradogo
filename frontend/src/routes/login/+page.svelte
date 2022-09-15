<script lang="ts">
    import { goto, invalidateAll } from '$app/navigation'
    import { NotificationDisplay, notifier } from '@beyonk/svelte-notifications'
    import {createSessionCookie} from '$lib/auth'

    let username = ''
    let password = ''
    
    let login = async () => {
        try {
            await createSessionCookie({username, password})
            invalidateAll()
        } catch (e) {
            // @ts-ignore
            notifier.danger("Falha ao realizar login")
        }
    }
</script>

<NotificationDisplay />
<div class="page">
    <img src="/images/Group_3.png" alt="group">
    <div class="container">
        <input class="input" bind:value={username} placeholder="E-Mail"/>
        <input class="input" type="password" bind:value={password} placeholder="Password"/>
    </div>
    <button class="btn" href="/" on:click={login}>entrar</button>
    <!-- <button class="btn" on:click={async ()=>{await goto('/signup')}}>cadastrar</button> -->
    <a class="btn" href="/signup">cadastrar</a>
</div>

<style>
    .btn:hover{
        cursor: pointer;
    }
    .btn {
        text-decoration: none;
        color: black;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-style: solid;
        border-width: 1px;
        border-color: black;
        border-radius: 100px;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 14px;
        margin-bottom: 10px;
        width: 130px;
        height: 40px;
    }
    .page {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        vertical-align: middle;
        justify-content: space-between;
    }
    .input {
        padding-left: 20px;
        margin-bottom: 20px;
        border-radius: 40px;
        width: 250px;
        height: 45px;
    }
    .container {
        display: flex;
        flex-direction: column;
    }
</style>