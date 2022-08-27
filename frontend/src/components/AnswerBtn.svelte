<script lang="ts">
    export let answer: string
</script>

<button class="answer-btn">
    {answer}
</button>

<style>
    @media only screen and (min-width: 0px) {
        .answer-btn {
        margin: 0.3rem auto;
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
    }
    

    @media only screen and (min-width: 1000px) {
        .answer-btn {
            width: 300px;
            margin: 0.3rem 0.3rem;
        }
    }
</style>