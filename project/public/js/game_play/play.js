import { ref } 
from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

// ここから今のscriptの中身を全部入れる
import { onMounted } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import { unrook } from "../socket.js";

onMounted(() => {
  const element = document.getElementById('camera');
  const style = element.getBoundingClientRect();
  const bgm = document.getElementById('sound');
  const log = document.getElementById('log');
  console.log(style.left);
});
    
      export const rulebook_display = ref(false);
 
        export const efect = ref(false);    

    
        
        export const photos = ref(
          [["photo/elevator.png", "photo/entrance.png", "photo/myroom.png",
          "photo/road.png", "photo/class.png", "photo/living.png"
          ],
          ["photo/room0.png", "photo/room1.png", "photo/room2.png",
          "photo/room3.png", "photo/room4.png"
          ]]);

     //画面の初期設定
     
       //カメラのId取得
       window.onload = function() {
        const control1 = document.querySelector('#scroolControl');
        //座標入力
        control1.scrollTop = 160;
        control1.scrollLeft = 230;
       }

       export const menu = ref(false);
       
       export function rulebook_dis() {
        rulebook_display.value = !rulebook_display.value;
        console.log(rulebook_display);
       }         
       export const coment = ref(["", ""]); 

       export const coment_c = (text) => {
        console.log("動いた");
          if (coment.value[0] === ""){
            coment.value[0] = text;
          }
          else if (coment.value.length > 0) {
            for (let i = coment.value.length; i > 0;) {
              coment.value[i] = coment.value[i - 1];
              i -= 1;
            }
            coment.value[0] = text; 
            coment.value.splice(19, 19);
        }
        }
        export let save_inventory = [];
        export let save_move = ref([0,0,0]);
        export let save_data = ref({move: [],
          time: [],unrook: []
        });
        export let save_unrook= [
          [true, true, true, false, true, false, false],
          [true, true, true, true, false, true, true]
        ];
        

        