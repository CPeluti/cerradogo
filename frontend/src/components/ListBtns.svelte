<script lang="ts">
    import AnswerBtn from "./AnswerBtn.svelte";
</script>

<ul>
    <AnswerBtn answer="esta é a correta!" />
    <AnswerBtn answer="esta é errada!" />
    <AnswerBtn answer="esta é errada!" />
    <AnswerBtn answer="esta é errada!" />
</ul>

<style>
    ul {
        padding: 1rem;
        width: 100%;
        flex-wrap: wrap;
        margin-left: auto;
        margin-right: auto;
        justify-content: space-evenly;  
        display: flex;
    }

    
</style>