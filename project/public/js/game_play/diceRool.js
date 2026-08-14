import { ref } 
from "../vue.esm-browser.js";

import { coment_c }
from "./play.js";

import { unrook } from "../socket.js";

export const judgment = ref({
          result: "　",
          reference: "　",
          symbole: "　",
          random: "　",
          on: false
        });

let rand_judg;
          
           export function diceRool(num) {
            console.log("ダイスロール");
            judgment.value.on = false;
            const rand = Math.floor(Math.random() * 100) + 1;
            judgment.value.reference = num;
            rand_judg = rand;

            if (judgment.value.reference >= rand_judg) {
              diceTime("≧", "成功");
              
              
            } else {
              diceTime("＜", "失敗");
              
            };

            setTimeout(function () {
              judgment.value.reference = "　";
              judgment.value.random = "　";
              judgment.value.symbole = "　"; 
              judgment.value.result = "　";
            }, 10000);
          };

           function diceTime(symbole_d, result_d) {
            setTimeout(function() {
               judgment.value.random = rand_judg;
              setTimeout(function() {
                judgment.value.symbole = symbole_d;
                judgment.value.result = result_d;
                /* 代わりに配置 */
               /* coment_c("P1" + result_d); */
               unrook(3, result_d)
              }, 500);
            }, 500);
          }      