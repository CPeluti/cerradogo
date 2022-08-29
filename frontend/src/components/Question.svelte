<script lang="ts">
    import type QuestionInterface from "interfaces/Question";
    import AnswerBtn from "./AnswerBtn.svelte"

    export let question: QuestionInterface
    const image = question.image
    const quest = question.question
    const answers = shuffle(question.answers)

    function shuffle(a: {text:string, right: boolean, selected: string}[]) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

   
    function showAnswer(option: {text:string, right: boolean, selected: string}){
        console.log(option)
        for (let a of answers){
            if(option === a || a.right === true) {
                a.selected = 'true'
            }
            else {
                a.selected = 'false'
            }
            
        }
        
    }

</script>

<div>
    <h2>
        {quest}
    </h2>
    <img src={image} alt="">
    
    <div>
        {#each answers as a}
            
            <AnswerBtn right={a.right && a.selected === 'true' ? true : false} 
                       wrong={!(a.right) && a.selected === 'true' ? true : false} 
                       notvisible={a.selected !== 'false' ? false : true}
                       answer={a.text} 
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
</style>