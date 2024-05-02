import { writable } from "svelte/store";

export const microappProducts = writable([]);
export const newProducts = writable({
    name: "",
    description: "",
    price: "",
    qty: "",
    image1: {},
    image2: {},
    image3: {}
})