import {writable, type Writable} from 'svelte/store'
import { browser } from "$app/environment";
import type { User } from 'src/interfaces/User';

export let userStore: Writable<User | null> = writable(null)
const store = writable(browser && (localStorage.getItem("userStore") || ''))
store.subscribe(val => browser && localStorage.setItem("userStore", val))
console.log(userStore,'teste2')
