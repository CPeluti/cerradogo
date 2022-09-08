import {writable} from 'svelte/store'
import { browser } from "$app/env";

export let userStore = writable({})
if (browser){
    userStore = writable(JSON.parse(localStorage.getItem("userStore")))
    userStore.subscribe(val => localStorage.setItem("userStore", JSON.stringify(val)))
}
