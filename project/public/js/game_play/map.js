import { ref, watch } 
from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

import { efect, coment_c, save_move, photos, rulebook_display, save_unrook }
from "./play.js";

import { getRoom, getBtns } from "./map_data.js";

import { i, inventory } from "./inventory.js";

import { search_f, search_bgm_stop } from "../audio.js";

import { phase } from "../state.js";
import { load_c, save_c } from "../socket.js";

export const screen_phase = ref([false, true]);

export const turns = ref([
          [false, false, false, false, false],
          [true, false, false, false, false]
        ]);

export const diferent_screen = ref([false]);
 //位置座標
export let top_v = ref(290);
export let left_v = ref(310);

console.log("縦", top_v.value, "横", left_v.value);
  //movesを定義
 let moveNum = [{}, {}];
        //時間
export const count = ref(0); 
export const time = ref([6, 0]); 

 const rooms = getRoom();
 export const rooms_v = ref(getRoom());
createRooms();

export let bgm_mane = ref(false);

export function createRooms() {
  window.addEventListener("DOMContentLoaded", () => {
console.log(document.querySelectorAll(".map_c"));
  const maps = document.querySelectorAll(".map_c");
  const maps2 = document.querySelectorAll(".map_c2");

  const p = document.querySelector(".map");
console.log(p.getBoundingClientRect());

   if (!maps.length) {
    console.log("map_cまだ無い");
    return;
  }

  maps.forEach(map_c => {

    rooms[0].forEach(room => {

      const div = document.createElement("div");

      div.className = "room";

      div.style.left = room.x + "px";
      div.style.top = room.y + "px";
      div.style.width = room.w + "px";
      div.style.height = room.h + "px";
      div.style.background = room.color;
      map_c.appendChild(div);
    });
  });

    maps2.forEach(map_c2 => {

    rooms[1].forEach(room => {
      const div = document.createElement("div");

      div.className = "room";
      div.dataset.roomId = room.id;

      div.style.left = room.x + "px";
      div.style.top = room.y + "px";
      div.style.width = room.w + "px";
      div.style.height = room.h + "px";
      div.style.background = room.color;

      map_c2.appendChild(div);
    });
  });
}
)};



rooms[0].forEach((room, index) => {
  console.log(index);
          //x座標計算
          let num_x = room.w /2;
          num_x = room.x + num_x;
          //y座標計算
          let num_y = room.h / 2;
          num_y = room.y + num_y;
          //計算した座標をmovesに格納
          moveNum[0][index] = {
            coor_x: num_x - 10,
            coor_y: num_y - 10
           }

        });

rooms[1].forEach((room, index) => {
  console.log(index);
          //x座標計算
          let num_x = room.w /2;
          num_x = room.x + num_x;
          //y座標計算
          let num_y = room.h / 2;
          num_y = room.y + num_y;
          //計算した座標をmovesに格納
          moveNum[1][index] = {
            coor_x: num_x - 10,
            coor_y: num_y - 10
           }
        });
        console.log(moveNum[0][1]);
      

export const Btns = getBtns();

 export const rook = ref([
  [true, true, true, true, true, true, false],
          [true, true, true, true, false, true, true]
]);

console.log(rook.value[1][1])
 export const unrook_code = [
    [0, 3], [1, 4], [0, 5]
  ];
  
  export const tra_opa = ref([0, null, null]);
   
  export const unrook_c = (num1, num2) => {

    /* 一時利用 */
    function travel_ver() {
          console.log("画面移行", tra_opa.value[0]);

          if (tra_opa.value[0] <= 1) {
             console.log("暗くなる");
            setTimeout(() => {
              tra_opa.value[0] += 0.05; 
              travel_ver();
            }, 100);
          }
          else {
            console.log("終了");
            setTimeout(() => {
              tra_opa.value[1] = "Thank you for playing!!";
              tra_opa.value[2] = "Wait for the next part!"
              console.log("感謝表示");
            }, 3000);
            
          }
         }
         if (num1 === 1) {
          console.log("動く");
          photos.value[0][5] = "photo/living_unc.png";
          search_bgm_stop();
          let bgm = new Audio('break.wav');
               bgm.play();
          rulebook_display.value = false;
            phase.value[3] = true;
            
            setTimeout(() => {
              console.log("3秒すぎました");
              travel_ver();
            }, 3000);
         }
         else if (num1 === 2) {
          count.value += 1;
         }

         /* ダイスロールコメ */
          else if (num1 === 3) {
            coment_c(num2);
          }
          /* セーブデータ */
          else if (num1 === 4) {
            console.log("ロード準備");
            load_c();
          }
          else if (num1 === 5) {
            save_c();
          }
         /* 本家 */
         else {
          rook.value[num1][num2] = true;
          save_unrook[num1][num2] = true;
      coment_c("扉が開いた！");
         }


         
      

      

  };  

         export const move_c = (level, index) => {
          console.log("初期音楽",bgm_mane.value);
          if(bgm_mane.value === false && level === 0 && index === 1) {
            search_f();
            bgm_mane.value = true;
            console.log("動く");
          }
          console.log("初期音楽",bgm_mane.value);
          
          
         /*  console.log(level, index); */
         console.log(rook.value[level][index]);
           if (rook.value[level][index] === true) { 
            diferent_screen.value[0] = false;
            
          left_v.value = moveNum[level][index].coor_y - 20;
          top_v.value = moveNum[level][index].coor_x - 20;

          /* console.log("縦", top_v.value, "横", left_v.value); */

          //カメラのId取得
        const control = document.querySelector('#scroolControl');
        const control_2 = document.querySelector('#scroolControl2');
        //座標入力
        control.scrollTop = left_v.value - 135;
        control.scrollLeft = top_v.value - 165;

        control_2.scrollTop = left_v.value - 135;
        control_2.scrollLeft = top_v.value - 165;
        /* console.log(control);  */
         
          //一旦すべて非表示
         turns.value[level] = turns.value.map(() => false);

         //特定の部屋のみのボタンを表示
         turns.value[level][index] = true;
         save_move.value[0] = level;
         save_move.value[1] = index;    

         /* console.log(turns.value); */

         

         Btns[0].forEach(b => {

         count.value += 1;
});
 }
else  {
  console.log("開かない");
  coment_c("開かない...");
}

 } 

export function diferent_screen_c(x) {
          diferent_screen.value[x] = !diferent_screen.value[x];
        }

  //時間関係
         watch(count, () => {
            /* console.log(count.value)
           console.log('左', left_v.value); */
 
           time.value[1] += 5;
 
           if(time.value[1] >= 60){
             time.value[1] = 0;
             time.value[0] += 1;
           }

           //ループ開始
           if(time.value[0] >= 8 && time.value[1] >= 30){
               time.value[0] = 6;
               count.value = 0;
               time.value[1] = -5;

            search_bgm_stop();
            console.log("音楽ストップ");
            bgm_mane = false;
             /* log_d.innerHTML += "<p>ループ</p>"; */
             coment_c("ループ");
               move_c(0, 0);
               let bgm = new Audio('sound.wav');
               bgm.play();
               efect.value = true;

               game_move_c(0);
            console.log(inventory.value);
              inventory.value = ["", "", "", "", "", "", "", "", "",  "", "", "", "", "", "", "", "", "", "",  "", ""];
              i.value = 0;
              console.log(inventory.value);
               setTimeout(function() {
                 efect.value = false;
               }, 1500);

               /* 施錠 */
              unrook_code.forEach(a => {
                /* console.log(a[0], a[1]); */
                rook.value[a[0]][a[1]] = false;
              });
             }
         }); 
         
         export const game_move_c = (num) => {
          screen_phase.value = turns.value.map(() => false);
          screen_phase.value[num] = true;
          turns.value = turns.value.map(() => false);
          save_move.value[2] = num;
          /* console.log(turns.value); */
          move_c(num, 0);
        };