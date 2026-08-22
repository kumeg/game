import { roomNum, roomPassword, display, attention, playerNames, skills1, skills2, skills3,
          authority, skill_on, my_name, title_note, regist, regist_join
 } from "./state.js";
import { phase_Change } from "./ui.js";
import { move_c, game_move_c, unrook_c, time, turns, rook } from "./game_play/map.js";
import { obtain_c, btn_c, inventory, i } from "./game_play/inventory.js";
import { save_data, save_inventory, save_move, coment_c, save_unrook } from "./game_play/play.js";

import { titleBGM_f, titleBGM_e } from "./audio.js";

import { share, set_regist } from "./socket_share.js";

import { skillSet, authority_gm, authority_p1, authority_p2, ready } from "./act_set_func.js";

export let socket;

export function joinRoom() {
  // console.log("join");
 titleBGM_f();
  const name = document.getElementById('name').value;
  const room = document.getElementById('room')?.value;
  const password = document.getElementById('password').value;

  const protocol =
    location.protocol === 'https:' ? 'wss:' : 'ws:';

 socket = new WebSocket(
    `${protocol}//${location.host}`
);

  socket.onopen = () => console.log("OPEN");
socket.onerror = (e) => console.log("ERROR", e);
  socket.onopen = () => {
    
    if (display.value) {
      /* socket.send(JSON.stringify(["enter", name, room, password])); */
      socket.send(JSON.stringify({
        type: "enter",
        name: name,
        room: room,
        password: password}));
      my_name.value = name;
    } else {
      /* socket.send(JSON.stringify(["create", password, name])); */
      socket.send(JSON.stringify({
        type: "create",
        password: password,
        name: name}));
      my_name.value = name;
      console.log("部屋を作成しました。")
    }
  };

  socket.onmessage = (event) => {
    
    /* try { */
    const data = JSON.parse(event.data);
    console.log(data);

    if (data[0] === "created") {
      roomNum.value = data[1];
      roomPassword.value = data[2];
      playerNames.value[0] = data[3]; 
      /* console.log(playerNames.value[0]); */
      phase_Change(1);

    }

    if (data[0] === "entered") {
      console.log("パスワードが承認しました")
      roomNum.value = data[1];
      roomPassword.value = data[2];
      /* playerNames.value.forEach((name, index) => {
        playerNames.value[index] = null;
      });
      data[3].forEach((name, index) => {
        playerNames.value[index] =name;
      });
      console.log(data[3]); */
      phase_Change(1);
    }

    if (data[0] === "names") {
      console.log("全名前");
      playerNames.value.forEach((name, index) => {
        playerNames.value[index] = null;
      });
      data[1].forEach((name, index) => {
        playerNames.value[index] = name;
      });
      console.log(data[1]);
    }

    if (data[3] === "note") {
      console.log("指摘");
      title_note.value[0] = data[0];
      title_note.value[1] = data[1];
      title_note.value[2] = data[2];
    }

if (data[0] === 'gm') {
  console.log("GMのデータ", data);
  const elements = document.getElementsByName('GM');
  elements[data[1]].checked = true;

}

if (data[0] === 'p1') {
  console.log("GMのデータ", data);
  const elements = document.getElementsByName('P1');
  elements[data[1]].checked = true;
  
}

if (data[0] === 'p2') {
  console.log("GMのデータ", data);
  const elements = document.getElementsByName('P2');
  elements[data[1]].checked = true;

}

set_regist(data);
share(data);
  } /* catch (eセーブします
    console.error("46:　エラーが出ました");
  }
  }  */
  socket.onclose = () => console.log("切断");
}

export const move = (level, index) => {
    let data = []
    data[0] = level;
    data[1] = index;
          let move_data = {
            type: "move",
            room: roomNum.value,
            data: data
          }
          console.log(move_data);
          socket.send(JSON.stringify(move_data));

        }

export const game_move = (num) => {
  let data = {
    type: "game_move",
    room: roomNum.value,
    num: num
  }
  console.log("マップ");
  /* data[0] = "game_move";
  data[1] = roomNum.value;
  data[2] = num; */
  
  socket.send(JSON.stringify(data));
}

export const obtain = (index) => {
  let obtain_data = {
    type: "obtain",
    room: roomNum.value,
    index: index
  }
  console.log(obtain_data);
  /* data[0] = "obtain";
  data[1] = roomNum.value;
  data[2] = index; */

  console.log("a");
  socket.send(JSON.stringify(obtain_data));
}
export const btn = (index) => {
  let btn_data = {
    type: "btn",
    room: roomNum.value,
    index: index
  }
  /* data[0] = "btn";
  data[1] = roomNum.value;
  data[2] = index; */
  socket.send(JSON.stringify(btn_data));
  /* btn_c(index); */
}

export function down_sun() {
  const down_data = {
    type: "down_sun",
    room: roomNum.value,
  }
  socket.send(JSON.stringify(down_data));
}
