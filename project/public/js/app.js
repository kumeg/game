import { createApp, ref, computed, reactive, watch } 
from "./vue.esm-browser.js";

// ここから今のscriptの中身を全部入れる
import { onMounted } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

onMounted(() => {
  const element = document.getElementById('camera');
  const style = element.getBoundingClientRect();
  const bgm = document.getElementById('sound');
  const log = document.getElementById('log');
  console.log(style.left);
});
    
   const rooms = [
  // room1（位置修正済）
  { id: 0, x: 285, y: 265, w: 75,  h: 75,  color: "rgba(255,0,0,0.2)", type: 1 },

  // room2
  { id: 1, x: 235, y: 145, w: 200, h: 115, color: "rgba(0,0,255,0.2)", type: 2 },

  // room3
  { id: 2, x: 75,  y: 45,  w: 160, h: 320, color: "rgba(0,255,0,0.2)", type: 3 },

  // room4
  { id: 3, x: 435, y: 125, w: 135, h: 255, color: "rgba(255,255,0,0.25)", type: 4 },

  // room5（位置修正済）
  { id: 4, x: 575, y: 305, w: 75,  h: 135, color: "rgba(160,0,255,0.25)", type: 5 }
];

window.addEventListener("DOMContentLoaded", () => {
  const map = document.getElementById('map');
});

rooms.forEach(room => {
  const div = document.createElement("div");
  div.className = "room";
  div.style.left = room.x + "px";
  div.style.top = room.y + "px";
  div.style.width = room.w + "px";
  div.style.height = room.h + "px";
  div.style.background = room.color; // 確認用

  window["room" + room.id] = room;
  map.appendChild(div);
});



        const judgment = ref({
          result: "　",
          reference: "　",
          symbole: "　",
          random: "　",
          on: false
        });

       const rulebook_display = ref(false);

  //movesを定義
        let moveNum = [{}];

        //roomsから一つずつ取り出す
        rooms.forEach((room, index) => {

          //x座標計算
          let num_x = rooms[index].w /2;
          num_x = rooms[index].x + num_x;

          //y座標計算
          let num_y = rooms[index].h / 2;
          num_y = rooms[index].y + num_y;
 
          //計算した座標をmovesに格納
          moveNum[index] = {
            coor_x: num_x - 10,
            coor_y: num_y - 10
           }
        });
        console.log(moveNum); 

        
  const RuleBook = {
    template: `
        <div>
            ルールブック
        </div>
    `
};


    const app_1 = Vue.createApp({
      setup() {
        //位置座標
        let top_v = ref(290);
        let left_v = ref(310);

        //時間
        const hour = ref(6);
        const minute = ref(0);
        const count = ref(0);
        
        const efect = ref(false);    

        const turns = ref([true, false, false, false, false]);
        const photos = ref(["photo/room0.png", "photo/room1.png", "photo/room2.png",
          "photo/room3.png", "photo/room4.png"
        ]);

     //画面の初期設定
     
       //カメラのId取得
       window.onload = function() {
        const control1 = document.querySelector('#scroolControl');
        //座標入力
        control1.scrollTop = 160;
        control1.scrollLeft = 230;
       }

       const menu = ref(false);

       function menu_display() {
        menu.value = !menu.value;
       }

       function rulebook_dis() {
        rulebook_display.value = !rulebook_display.value;
        console.log(rulebook_display);
       }

     const Btns = [
        
          // (class名,向かう場所(関数いれる),ボタンを表示させる場所,表示させるものボタン非表示)
          //0
          { number: 1, classname: "Btn1", go: () =>move(1), typeIndex: 0, display: "↑"},
          //1
          { number: 2, classname: "Btn2", go: () => move(2), typeIndex: 1, display: "←"},
          { number: 3, classname: "Btn3", go: () =>move(3), typeIndex: 1, display: "→"},
          { number: 4, classname: "Btn1", go: () =>move(0), typeIndex: 1, display: "↓"},
          //2
          { number: 5, classname: "Btn2", go: () =>move(1), typeIndex: 2, display: "→"},
          //3
          { number: 4, classname: "Btn3", go: () =>move(1), typeIndex: 3, display: "←"},
          { number: 4, classname: "Btn4", go: () =>move(4), typeIndex: 3, display: "→"},
          //4
          { number: 4, classname: "Btn4", go: () =>move(3), typeIndex: 4, display: "←"},
        ];

        //ここでmoveNumの数字をtop_v,left_vに入れる
         const move = (index) => {
          left_v.value = moveNum[index].coor_y;
          top_v.value = moveNum[index].coor_x;

          //カメラのId取得
        const control = document.querySelector('#scroolControl');
        //座標入力
        control.scrollTop = left_v.value - 135;
        control.scrollLeft = top_v.value - 165;
        console.log(control); 
         
          //一旦すべて非表示
         turns.value = turns.value.map(() => false);

         //特定の部屋のみのボタンを表示
         turns.value[index] = true

         console.log(turns.value);

         Btns.forEach(b => {
         console.log(turns.value[b.typeIndex]);

         count.value += 1;
      
});
     
        } 

        //時間関係
        watch(count, () => {
           console.log(count.value)
          console.log('左', left_v.value);

          minute.value += 10;

          if(minute.value >= 60){
            minute.value = 0;
            hour.value += 1;
          }
          if(hour.value >= 7 && minute.value >= 0){
              hour.value = 6;
              count.value = 0;
              minute.value = -10;
            log.innerHTML += "<p>ループ</p>";
              move(0);
              let bgm = new Audio('../sound.wav');
              bgm.play();
              efect.value = true;

              setTimeout(function() {
                efect.value = false;
              }, 9000);
            }
        }) 

        /* インベントリ */

       const inventory = ref(["", "", "", "", "", "", "", "", "",  "", "", "", "", "", "", "", "", "", "",  "", ""]);
       const items = [["鳥", "bard.jpg"],
                      ["矢印", "arrow_back.png"]]
       const i = ref(0);
       
         
           const obtain = (index) => {
            if(i.value < 20){
            inventory.value[i.value] = items[index][1];
            log.innerHTML += "<p>入手：　" + items[index][0] + "</p>";
            i.value += 1;
            console.log(i.value);
            }else {
              console.log("それ以上は持てません！！")
            }

          }
         
          const btn = (index) => {
            inventory.value[index] = null;

            //もしi以下にnullができたら
            for(let k = 0; k < i.value; k++) {
              console.log(inventory.value[k])
              /* もしs番目のinventoryが空白だったら */
              if(inventory.value[k] === null) {
                i.value = k; 
                
                while(inventory.value[i.value + 1] !== "") {
                  inventory.value[i.value] = inventory.value[i.value + 1];
                  inventory.value[i.value + 1] = null;
                  i.value += 1;
                  console.log(i.value);
                } 
              };
            };
          }

          function diceRool_display() {
            console.log("表示");
            judgment.value.on = true;
          };

          let rand_judg;
          
          function diceRool() {
            console.log("ダイスロール");
            judgment.value.on = false;
            const rand = Math.floor(Math.random() * 100) + 1;
            judgment.value.reference = 50;
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
                log.innerHTML += "<p class='text_gm'>P1:　" + result_d + "</p>";
              }, 500);
            }, 500);
          }

         const screen = ref([0, 0]);

        let x = 0;
        let y = 0;

          
        const update = (event) => {

          screen.value[0] = event.pageX - x;
          screen.value[1] = event.pageY - y;

          const control = document.querySelector('#scroolControl');
          control.scrollTop -= screen.value[1] / 12;
        control.scrollLeft -= screen.value[0] / 12;
        };

        const startHold = (event) => {
          window.addEventListener("mousemove", update);
            x = event.pageX;
           y = event.pageY; 
          console.log(x);
          
        };
        const stopHold = () => {
          window.removeEventListener("mousemove", update);
        }; 

         const update2 = (event) => {

          screen.value[0] = event.pageX - x;
          screen.value[1] = event.pageY - y;

          const control = document.querySelector('#scroolControl_2');
          control.scrollTop -= screen.value[1] / 12;
        control.scrollLeft -= screen.value[0] / 12;
        };

        const startHold2 = (event) => {
          window.addEventListener("mousemove", update2);
            x = event.pageX;
           y = event.pageY; 
          console.log(x);
          
        };
        const stopHold2 = () => {
          window.removeEventListener("mousemove", update2);
        };  

        return {
          top_v,
          left_v,
          move,
          Btns,
          turns,
          hour,
          minute,
          count,
          efect,
          photos,
           inventory,
          i,
          obtain,
          items,
          btn,
          judgment,
          diceRool_display,
          diceRool,
          screen,
          startHold,
          stopHold,
          menu,
          menu_display,
          startHold2,
          stopHold2,
          rulebook_display,
          rulebook_dis
        }
      }
    });
    /* .mount("#app_1"); */
    
    app_1.component('rulebook', RuleBook);
    
    app_1.mount('#app_1');