<script lang="ts">
    import Question from "../../../../components/Question.svelte"
    const promise = fetch("http://localhost:3030/question/631794498db52c5f1dfe5552", {method: "GET"}).then(res => res.json());
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