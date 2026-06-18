import { ref} 
from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

import { coment_c } from "./play.js";

export const inventory = ref(["", "", "", "", "", "", "", "", "",  "", "", "", "", "", "", "", "", "", "",  "", ""]);

export const items = [
    ["鳥", "bard.jpg",
      "鳥だ。デスクに出てきた鳥を取ってきたもの"
    ],
    ["矢印", "arrow_back.png",
      "ただのやじるし、今は地図の現在地を示すようにしている。"
    ]];

export const i = ref(0);


export const obtain_c = (index) => {
            if(i.value < 20){
            inventory.value[i.value] = items[index][1];
            coment_c("入手" + items[index][0]);
            i.value += 1;
            console.log(i.value);
            }else {
              console.log("それ以上は持てません！！")
            }

          }
          /* アイテム消したときに消した部分をずらす */
          export const btn_c = (index) => {
            /* 特定の場所を消すもの */
                      
                      for (let num = index; num <= i.value; num++) {
                        inventory.value[num] = inventory.value[num + 1];
                      }
                      inventory.value[i.value] = "";
                      i.value -= 1;
                      
          
                      //もしi以下にnullができたら
                       /* for(let k = 0; k < i.value; k++) {
                        console.log(inventory.value[k]) 

                         もしs番目のinventoryが空白だったら 
                       if(inventory.value[k] === null) {
                          i.value = k; 
                          
                          while(inventory.value[i.value + 1] !== "") {
                            inventory.value[i.value] = inventory.value[i.value + 1];
                            inventory.value[i.value + 1] = null;
                            i.value += 1;
                            console.log(i.value);
                          } 
                        };
                      };  */
                    }

                    export const introduce_dis = ref(false);
                    export const introduce_photo = ref("");
                    export const introduce_sentence = ref("");
                    export let number = -1;
          
          export function introduce_c(num) {
            introduce_photo.value = inventory.value[num];
            items.forEach((item) => {
                        if (item[1] === introduce_photo.value) {
                        console.log(introduce_photo.value);
                        introduce_sentence.value = item[2];
                        console.log(introduce_sentence.value); 
                        console.log("起動２")
                      }
                    })
                    if (number === num) {
    // 同じアイテムをクリック → OFF
    introduce_dis.value = false;
    number = null;

  } else {
    // 違うアイテム → ON
    introduce_dis.value = true;
    number = num;
  }
                    console.log(num ,number, introduce_dis);
                    
                    }