<script lang="ts">
    /* import Fa from '../../node_modules/svelte-fa/src/fa.svelte'
    import { faFlag } from '@fortawesome/free-solid-svg-icons/index.es' */
    import {createEventDispatcher} from "svelte"
    export let answer: string
    export let icon: string
    export let right: boolean = false
    export let wrong: boolean = false
    export let notvisible: boolean = false
    const dispatch = createEventDispatcher()
    function clickAnswer () {dispatch("clickAnswer")}
    //let camera = window.FontAwesome.icon({ prefix: 'fas', iconName: 'camera' })
</script>

<button class="answer-btn" class:right class:wrong class:notvisible  on:click={clickAnswer}>
    {answer} <i class={icon}></i>  <!-- fas fa-bars text-white --> 
</button>

<style>
    @media only screen and (min-width: 0px) {
        .answer-btn {
            margin: 0.2rem auto;
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

    .right {
        background-image: linear-gradient(to right, #A8F46C , #37E91A);
        cursor: default;
    }

    .wrong {
        cursor: default;
        background-image: linear-gradient(to right, #F46C6C , #E91A1A);
    }

    .notvisible {
        visibility: hidden;
    }

    /* .answer-btn:hover {
        background-image: linear-gradient(to right, #7196f5 , #0d5cc4);
    } */

</style>