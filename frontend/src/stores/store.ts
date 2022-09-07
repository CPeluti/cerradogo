import {writable} from 'svelte/store'

export const user = writable({
    nickname: "Beeblebrox42",
    lvl: 42,
    xp: 8/10
})
