<script lang="ts">
    import { goto, afterNavigate } from '$app/navigation';
    import type QuestionInterface from "interfaces/Question";
    import {request} from '$lib/request'
    import AnswerBtn from "./AnswerBtn.svelte"
    export let question: QuestionInterface
    export let hunt

    import {userStore} from '../stores/store'
    
    let userValue
    userStore.subscribe(value=>{
        userValue = value
    })

    let previousPage : string | undefined;
    afterNavigate((navigation):void => {
        previousPage = navigation.from?.url.pathname || '/'
    })
    const image = `data:${question.img.fileType};base64,${question.img.file}`
    const quest = question.question
    let answers = shuffle(question.answers)
    let disabled = false
    function shuffle(a: {text:string, right: boolean, selected: string}[]) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

   
    async function showAnswer(option: {text:string, right: boolean, selected: string}){
        if(!disabled){
            disabled = true
            for (let a of answers){
                
                if(option === a || a.right === true) {
                    a.selected = 'true'
                }
                else {
                    a.selected = 'false'
                }
                
            }
    
            if(option.right === true) {
                select = 'true'
                let res = await request(`http://localhost:3030/user/point`, "POST", {id: hunt.id, player: userValue['_id']})
                res = await res.json()
                userStore.set({...res})
            }
            else {
                select = 'false'
            }
            answers = [...answers]
        }
    }

    let select = ''

</script>

<div>
    <div class="qst">
        <h2>
            
            {#if select === 'true'}
            {"Resposta correta!"}
            {:else if select === 'false'}
            {"Resposta errada! Tente novamente!"}
            {:else}
            {quest} 
            {/if}
            
        </h2>
    </div>
    <img src={image} alt="question">
    
    
    <div id="options">
        
        {#each answers as a}
            
            <AnswerBtn right={a.right && a.selected === 'true' ? true : false} 
                    wrong={!(a.right) && a.selected === 'true' ? true : false} 
                    notvisible={a.selected !== 'false' ? false : true}
                    answer={a.text} 
                    icon={a.right && a.selected === 'true' ? "fas fa-check" : (a.selected === 'true' ? "fas fa-x" : "")}
                    on:clickAnswer={() => showAnswer(a)} />
            
        {/each} 
        {#if disabled}
            <button on:click={async ()=>{await goto(previousPage)}}> Voltar </button>
        {/if}
    
        
    </div>
    
    
</div>


<style>
    button {
        margin-top: 100px;
        padding: 0.5rem;
        width: 400px;
        height: 40px;
        border: none;
        border-radius: 50px;
        background-image: linear-gradient(to right, #6C92F4 , #1A73E9);
        cursor: pointer;
        display: block;
        color: white;
        text-align: center;
        line-height: 20px;
        text-transform: uppercase;
        font-weight: bold;
    }

    div {
        display: flex;
        flex-wrap: wrap;
        margin-left: auto;
        margin-right: auto;
        margin-top: 1rem;
    }

    .qst{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    h2 {
        text-transform: uppercase;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-weight: normal;
        text-align: center;
        vertical-align: middle;
        display: flex;
        font-size: larger;
        margin: 2rem auto;
        margin-left: auto;
        margin-right: auto;
    }

    img {
        max-width: 300px;
        width: 40%;
        margin: auto;
    }

    #options {
        display: flex;
        flex-direction: column;
        margin-left: auto;
        margin-right: auto;
        
    }

</style>