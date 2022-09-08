<script lang="ts">

    import type QuestionInterface from "interfaces/Question";
    import AnswerBtn from "./AnswerBtn.svelte"

    export let question: QuestionInterface
    const image = `data:${question.img.file};base64,${question.img.fileType}`
    const quest = question.question
    let answers = shuffle(question.answers)

    function shuffle(a: {text:string, right: boolean, selected: string}[]) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

   
    function showAnswer(option: {text:string, right: boolean, selected: string}){
        console.log("TESTE")
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
        }
        else {
            select = 'false'
        }
        answers = [...answers]
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
    <img src={image} alt="">
    
    
    <div id="options">
        
        {#each answers as a}
            
            <AnswerBtn right={a.right && a.selected === 'true' ? true : false} 
                    wrong={!(a.right) && a.selected === 'true' ? true : false} 
                    notvisible={a.selected !== 'false' ? false : true}
                    answer={a.text} 
                    icon={a.right && a.selected === 'true' ? "fas fa-check" : (a.selected === 'true' ? "fas fa-x" : "")}
                    on:clickAnswer={() => showAnswer(a)} />
            
        {/each} 
    
        
    </div>
    
    
</div>


<style>
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
        margin-left: auto;
        margin-right: auto;
        
    }

</style>