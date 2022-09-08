<script lang="ts">
    import { goto } from '$app/navigation'
    import { userStore } from '../../stores/store'
    import { NotificationDisplay, notifier } from '@beyonk/svelte-notifications'
    import {createSessionCookie} from '$lib/auth'

    let username = ''
    let password = ''
    
    let login = async () => {
        try {
            const {user} = await createSessionCookie({username, password})
            userStore.set({...user})
            await goto('/')
        } catch (e) {
            // @ts-ignore
            notifier.danger("Falha ao realizar login")
        }
    }
</script>

<NotificationDisplay />
<div class="page">
    <h1>logo</h1>
    <div class="container">
        <input class="input" bind:value={username} placeholder="E-Mail"/>
        <input class="input" type="password" bind:value={password} placeholder="Password"/>
    </div>
    <button class="btn" on:click={login}>entrar</button>
    <button class="btn" on:click={async ()=>{await goto('/signup')}}>cadastrar</button>
</div>

<style>
    .btn:hover{
        cursor: pointer;
    }
    .btn {
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