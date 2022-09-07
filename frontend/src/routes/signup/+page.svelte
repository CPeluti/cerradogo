<script lang="ts">
import { signUpUser } from "$lib/auth";
import { NotificationDisplay, notifier } from '@beyonk/svelte-notifications'

  let email = ""
  let password = ''
  let nickname = ''
  let senhaConfirmar = ''
  let disabled = true;
  let name = ''

  let signUp = async () => {
        try {
            await signUpUser({email, name, nickname, password})
            window.location.replace('/login')
        } catch (e) {
            // @ts-ignore
            notifier.danger("Falha ao realizar o cadastro")
        }
    }

</script>
  
<div class="tela">
  <form>
    <button class="back">Voltar</button>
    <h2 class="center">Criar Conta</h2>

    <div class="center">
      <h1>Cerrado Go</h1>
    </div>

    <div class="field">
      <input name="email" class="input" placeholder="Email" bind:value = {email}/>
    </div>

    <div class="field">
      <input name="userName" class="input" placeholder="Usuario" bind:value = {nickname}/>
    </div>

    <div class="field">
      <input name="name" class="input" placeholder="Seu Nome" bind:value = {name}/>
    </div>

    <div class="field">

      <input
        bind:value = {password}
        type='password'
        class="input"
        placeholder="Senha"
      />
    </div>

    <div class="field">

      <input
        bind:value = {senhaConfirmar}
        type='password'
        class="input"
        placeholder="Confirmar Senha"
      />
    </div>

    <div class="center">
      <button on:click={signUp} disabled={(password!=senhaConfirmar)||(password.length < 2)||(!email.includes("@"))||(nickname.length < 4)}>Cadastrar</button>
    </div>
    
  </form>

</div>

<style>
  form {
    --text-color: #afafaf;
  }
  
  .field {
    width: 20rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3rem;
    position: relative;
    border-bottom: 2px dashed var(--text-color);
    transition: 500ms;
  }

  .tela {
    width: 20rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3rem;
    position: relative;
  }
  
  .input {
    outline: none;
    border: none;
    overflow: hidden;
    margin: 0;
    width: 100%;
    padding: 0.25rem 0;
    background: none;
    color: black;
    font-size: 1.2em;
    font-weight: bold;
    transition: border 500ms;
  }
  
  .input:valid {
    color: black;
  }
  
  .input:invalid {
    color: orangered;
  }
  
  .field::after {
    content: "";
    position: relative;
    display: block;
    height: 4px;
    width: 100%;
    background: #1A73E9;
    transform: scaleX(0);
    transform-origin: 0%;
    opacity: 0;
    transition: all 500ms ease;
    top: 2px;
  }
  
  .field:focus-within {
    border-color: transparent;
  }
  
  .field:focus-within::after {
    transform: scaleX(1);
    opacity: 1;
  }

  .back {
    width: auto;
  }
  
  button {
    width: 20rem;
    margin-left: auto;
    margin-right: auto;
    padding: 10px 30px;
    font-weight: bold;
    border: 2px solid #1A73E9;
    color: white;
    border-radius: 100px;
    background: #1A73E9;
    transition: all 1000ms;
  }
  
  button:disabled {
    border-color: gray;
    background: gray;
    color: lightgray;
  }

  h1 {
    color: #1A73E9;
  }
  
  .center {
  display: flex;
  justify-content: center;  
  }

</style>