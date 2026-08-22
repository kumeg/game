import { ref } 
from "../vue.esm-browser.js";

import { coment_c }
from "./play.js";

import { unrook } from "../share_func.js"; 

import { names1, names2, names3 } from "../state.js";

export const judgment = ref({
          result: "　",
          reference: "　",
          symbole: "　",
          random: "　",
          on: false
        });

let rand_judg;
          
           export function diceRool(num, names, name_num,player) {
            console.log("ダイスロール");
            judgment.value.on = false;
            const rand = Math.floor(Math.random() * 100) + 1;
            judgment.value.reference = num;
            rand_judg = rand;

            let skills = [names, name_num]
            if (judgment.value.reference >= rand_judg) {
              diceTime("≧", "成功", skills, rand_judg,player);
              
              
            } else {
              diceTime("＜", "失敗", skills, rand_judg,player);
              
            };

            setTimeout(function () {
              judgment.value.reference = "　";
              judgment.value.random = "　";
              judgment.value.symbole = "　"; 
              judgment.value.result = "　";
            }, 10000);
          };

           function diceTime(symbole_d, result_d, name, num,player) {

            let skills = null;
           
              if (name[0] === 1) {
              skills = names1.value[player][name[1]];
            }
            if (name[0] === 2) {
              skills = names2.value[player][name[1]];
            }
            if (name[0] === 3) {
              skills = names3.value[player][name[1]];
            }

            setTimeout(function() {
               judgment.value.random = rand_judg;
              setTimeout(function() {
                judgment.value.symbole = symbole_d;
                judgment.value.result = result_d;
                /* 代わりに配置 */
               /* coment_c("P1" + result_d); */
               const text = skills + ":" + result_d; 
               unrook(3, text);
              }, 500);
            }, 500);
          }      