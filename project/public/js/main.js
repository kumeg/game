import { createApp, watch, nextTick } from "./vue.esm-browser.js";


import {
  phase,
  skills1,
  skills2,
  skills3,
  point,
  names1,
  names2,
  names3,
  roomNum,
  roomPassword,
  display,
  attention,
  playerNames,
  authority,
  skill_on,
  my_name,
  title_note,
  regist,
  regist_join,
  hint_num
} from "./state.js";

import { 
  joinRoom,
  skillSet,
  authority_gm,
  authority_p1,
  authority_p2,
  ready,
  move,
  game_move,
  unrook,
  obtain,
  btn,
  load,
  save,
  down_sun,
  load_c,
  save_c
 } from "./socket.js";
import { a, b, phase_Change } from "./ui.js";

import {
          efect, 
          photos,
          menu,
          rulebook_display,
          rulebook_dis,
          coment,
          coment_c,

          save_inventory,
          save_move,
          save_data,
          
} from "./game_play/play.js";

import { createRooms, Btns, turns, top_v, left_v, 
  time, count, screen_phase, rook,
  diferent_screen, diferent_screen_c,

  move_c, game_move_c, unrook_c, rooms_v, bgm_mane, tra_opa } from "./game_play/map.js";

import { inventory, i, items, obtain_c, introduce_dis, introduce_c, introduce_photo, introduce_sentence, number } from "./game_play/inventory.js";

import { screen, startHold, stopHold, startHold2, stopHold2 } from "./game_play/scrool.js";

import { judgment, diceRool } from "./game_play/diceRool.js";

 import { RuleBook } from "./rulebook.js"; 

 import { bgms } from "./audio.js";

window.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("volumeSlider");

    slider.addEventListener("input", () => {
        console.log("変更");
    });
});

const app = createApp({
  setup() {

     watch(display, async (val) => {

    if (val === true) {

      await nextTick(); // DOM生成待つ

      createRooms();

    }

  });
    return {
      phase,
      phase_Change,
      joinRoom,
      skills1,
      skills2,
      skills3,
      point,
      names1,
      names2,
      names3,
      roomNum,
      roomPassword,
      display,
      a,
      b,
      attention,
      playerNames,
      my_name,
      skillSet,
      authority_gm,
      authority_p1,
      authority_p2,
      authority,
      ready,
      skill_on,
      title_note,
      regist,

      /* プレイ画面 */
      top_v,
          left_v,
          move,
          btn,
          turns,
          time,
          count,
          efect,
          photos,
           inventory,
           items,
          i,
          obtain,
          Btns,
          judgment,
          diceRool,
          screen,
          startHold,
          stopHold,
          menu,
          startHold2,
          stopHold2,
          rulebook_display,
          rulebook_dis,
          createRooms,
          game_move,
          screen_phase,
           rook, 
          unrook,
          diferent_screen,
          diferent_screen_c,
          coment,
          coment_c,
          move_c,
          game_move_c,
          unrook_c,
          obtain_c,
          introduce_dis,
          introduce_c,
          introduce_photo,
          introduce_sentence,
          number,
          save,
          save_inventory,
          save_move,
          save_data,
          load,
          regist_join,
          down_sun,
          rooms_v,
          bgm_mane,
          hint_num,
          tra_opa,
          load_c,
          save_c
    };
  }

  
});

app.component('rulebook', RuleBook);
app.mount('#app');
