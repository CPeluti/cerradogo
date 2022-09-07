<script lang="ts">
    import Question from "../../components/Question.svelte"
    import fig from "../../components/teste.jpg"
    import type QuestionInterface from "../../../interfaces/Question"

    const promise = fetch("http://localhost:3030/question/6317902477919c1c68e3b4da", {method: "GET"}).then(res => res.json());

    /* let question = async () => {
        try {
            const res = await fetch("http://localhost:3030/question/6317902477919c1c68e3b4da", {method: "GET"})
            const qst = await res.json()
            
        } catch (e) {
            console.log(e)
        }
    } 
    
    const quest: QuestionInterface = {
        question: question.text,
        image: question.img,
        answers: question.answers
    } */
</script>

{#await promise then data}

<div id="question">
    <Question question={data} />
</div>

{/await}

<style>
    #question {
        width: 100%;
        display: flex;
        margin: auto;
        height: 50%;
    }

</style>