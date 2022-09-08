<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;
    import Question from "../../../../components/Question.svelte"
</script>


<div id="question">
    <Question question={data} />
</div>

<style>
    #question {
        width: 100%;
        display: flex;
        margin: auto;
        height: 50%;
    }

</style>