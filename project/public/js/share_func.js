import { save_data, save_inventory, coment_c, save_move, save_unrook } from "./game_play/play.js";

import { rook, game_move_c, move_c, time, turns } from "./game_play/map.js";

import { inventory, i } from "./game_play/inventory.js";

import { socket } from "./socket.js";

import { roomNum } from "./state.js";

export const unrook = (num1, num2) => {
    let unrook_data = {
      type: "unrook",
      unrook: [num1, num2],
      room: roomNum.value
    }
    socket.send(JSON.stringify(unrook_data));
  }
  
export function save_c() {
          console.log("セーブ");
          inventory.value.forEach((item, index) => {
            save_inventory[index] = item; 
          });
          save_data.value.move[0] = save_move.value[0];
          save_data.value.move[1] = save_move.value[1];
          save_data.value.move[2] = save_move.value[2];
          save_data.value.time[0] = time.value[0];
          save_data.value.time[1] = time.value[1];
          save_data.value.inventory = i.value;
          coment_c("セーブしました。")
          console.log(turns.value);
          save_data.value.unrook[0] = save_unrook;
          console.log(save_data.value.unrook[0]);
        }

export function save() {
  const data = save_data.value;
 let unrook_data = {
      type: "share",
      data: ["save",data],
      room: roomNum.value
    }
  socket.send(JSON.stringify(unrook_data));
}

export function load_c() {

  console.log(save_data.value.unrook[0]);
              save_data.value.unrook[0].forEach((unrooks,index)  => {
                console.log(index, unrooks);
                unrooks.forEach((code,index_2) => {
                  rook.value[index][index_2] = code;
                });
              });
          inventory.value.length = 0;
              i.value = 0;
              save_inventory.forEach((item, index) => {
                inventory.value[index] = item;
              });
              i.value = save_data.value.inventory;
              game_move_c(save_data.value.move[2]);
              move_c(save_data.value.move[0], save_data.value.move[1]);
              
              time.value[0] = save_data.value.time[0];
              time.value[1] = save_data.value.time[1] - 10;
              /* rook.value = save_data.value.unrook[0]; */
              
              console.log(rook.value);
              coment_c("ロードしました。");
              console.log(turns.value);

        }

export function load() {
  const data = save_data.value;
 let unrook_data = {
      type: "share",
      data: ["load", data],
      room: roomNum.value
    }
  socket.send(JSON.stringify(unrook_data));
}

export function diceRool() {
  
}

