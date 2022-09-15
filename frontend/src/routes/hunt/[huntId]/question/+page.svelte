<script lang="ts">
    export let data: Question;
    import Question from "../../../../components/Question.svelte"
</script>


<div id="question">
    <Question question={data.questions} hunt={data.hunt} user={data.user}/>
</div>

<style>
    #question {
        width: 100%;
        display: flex;
        margin: auto;
        height: 50%;
    }

</style>