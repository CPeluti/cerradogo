<script lang="ts">
    import Question from "../../components/Question.svelte"
    import fig from "../../components/teste.jpg"
    import type QuestionInterface from "../../../interfaces/Question"

    const quest: QuestionInterface = {
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
        image: fig,
        answers: [{text: "correta", right: true, selected: ''}, 
                  {text: "errada", right: false, selected: ''}, 
                  {text: "incorreta", right: false, selected: ''}, 
                  {text: "esta não", right: false, selected: ''}]
    }
</script>

<div id="question">
    <Question question={quest} />
</div>

<style>
    #question {
        width: 100%;
        display: flex;
        margin: auto;
        height: 50%;
    }

</style>