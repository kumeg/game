import { hint_num } from "../state.js";
import { inventory } from "./inventory.js";
export function hint(type, index) {
    console.log(type, index);
    if (type === "obtain" && index === "key1") {
        hint_num.value = 1.1;
    }
    else if (type === "obtain" && index === "hint1_1") {
        hint_num.value = 1.2;
    }

    let n = 0;

    inventory.value.forEach(element => {
        console.log(element);
       if (element === "photo/hint1_1.png") {
        n += 1;
       }
       if (element === "photo/hint1_2.png") {
        n += 1;
       } 
       if (element === "photo/hint1_3.png") {
        n += 1;
       } 
       if (element === "photo/hint1_4.png") {
        n += 1;
       } 
    });
    
    if (n === 4) {
        hint_num.value = 1.3;
    }
    if (type === "obtain" && index === "key2") {
        hint_num.value = 1.4;
    }
    
}