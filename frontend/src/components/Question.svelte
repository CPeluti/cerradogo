<script lang="ts">
    export let question: string
    export let src: string
    export let alt: string
</script>

<div>
    <h2>
        {question}
    </h2>
    <img {src} {alt}>
    
</div>


<style>
    div {
        display: flex;
        flex-wrap: wrap;
        margin-left: auto;
        margin-right: auto;
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