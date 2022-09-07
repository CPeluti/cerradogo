<script lang="ts">
import { singUpUser } from "$lib/auth";


  
  const strengthText = ["", "bad 💩", "ok 😐", "decent 🙂", "solid 💪"];

  let email = ""
  let password = ''
  let nickname = ''
  let senhaConfirmar = ''
  let showPassword = false;
  let disabled = true;
  let validations = []

  let singUp = async () => {
        try {
            const {user} = await singUpUser({email, nickname, password})
            window.location.replace('/')
        } catch (e) {
            // @ts-ignore
            notifier.danger("Falha ao realizar o cadastro")
        }
    }

  function verificar() {
    let aux = (password!=senhaConfirmar)||(password.length < 6)
    if(aux){
      return true
    }
  }

  function userExists() {
    if (nickname.length < 4) {
      return true
    }
    return false
  }

</script>
  
<body>
  <form>
    <button class="back">Voltar</button>
    <h2 class="center">Criar Conta</h2>

    <div class="center">
      <h1>Cerrado Go</h1>
    </div>

    <div class="field">
      <input type="email" name="email" class="input" placeholder="Email" bind:value = {email}/>
    </div>

    <div class="field">
      <input type="user-name" name="userName" class="input" placeholder="Usuario" bind:value = {nickname}/>
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
      <button on:click={singUp} disabled={(password!=senhaConfirmar)||(password.length < 2)||(!email.includes("@"))||userExists()}>Sign Up</button>
    </div>
    
  </form>

</body>

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