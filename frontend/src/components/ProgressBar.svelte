<script lang="ts">
    export let progress: number
    export let color: string
</script>
<div class="background">
    <div style=" border-radius: 15px; background-color:{color}; height: 6px; width: {progress*100}%">
    </div>
</div>
<style>
    .background{
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.45)); 
        border-radius: 15px; 
        background-color:#D9D9D9;
    }
</style>

