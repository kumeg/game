import { roomNum, roomPassword, display, attention, playerNames, skills1, skills2, skills3,
          authority, skill_on, my_name, title_note, regist, regist_join
 } from "./state.js";
import { phase_Change } from "./ui.js";
import { move_c, game_move_c, unrook_c, time, turns, rook } from "./game_play/map.js";
import { obtain_c, btn_c, inventory, i } from "./game_play/inventory.js";
import { save_data, save_inventory, save_move, coment_c, save_unrook } from "./game_play/play.js";

import { titleBGM_f, titleBGM_e } from "./audio.js";

let socket;

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

    if (data[0] === "skillsP1") {
  const newData = [...data[1]]; // 念のためコピー

  skills1.value[0] = newData.slice(0, 3);
  skills2.value[0] = newData.slice(3, 6);
  skills3.value[0] = newData.slice(6, 9);
  skill_on.value[0] = true;
  console.log("受信データ:", data[1]);
  regist.value[0][0] = true;
}
    if (data[0] === "skillsP2") {
  const newData = [...data[1]]; // 念のためコピー

  skills1.value[1] = newData.slice(0, 3);
  skills2.value[1] = newData.slice(3, 6);
  skills3.value[1] = newData.slice(6, 9);
  skill_on.value[1] = true;
  regist.value[0][1] = true;
  console.log("受信データ:", data[1]);
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

if (data[0] === 'cha_regist') {
  regist.value[0][data[1]] = true;
}
if (data === 'check_OK') {
  console.log('チェック完了');
  regist.value[1][2][1] = "○";
  attention.value[1] = "他のプレイヤーをお待ちください";

  if(regist.value[0][0] === true && regist.value[0][1] === true) {
    regist.value[1][1][1] = "○";
    regist.value[1][1][0] = "green"
    regist.value[1][2][0] = "green"
  }
}

if (data === 'ready_not') {
  attention.value[1] = null;
  regist.value[1][2][1] = "×"
}

if (data[0] === 'check_go') {
  phase_Change(2);
  titleBGM_e();
  
  game_move_c(0);
  if (data[1].gm === my_name.value) {
    console.log("あなたはGM");
    authority.value[0] = true;
  }
  else if (data[1].p1 === my_name.value) {
    console.log("あなたはP1");
    authority.value[1] = true;
  }
  else if (data[1].p2 === my_name.value) {
    console.log("あなたはP2");
    authority.value[2] = true;
  }
  console.log("自分の名前", my_name.value);
  move_c(0,5);
   console.log(document.querySelectorAll(".map_c"));

   /* fetch('rulebook.html')
               .then(response => response.text())
               .then(data => {
                 console.log("データ内",data);
                   document.getElementById('rulebook_t').innerHTML = data;
                   
               }); */
}
if (data.type === "regist_1") {
  console.log("登録")
  console.log(regist.value);
  regist.value[1][0][0] = data.regist[0];
  regist.value[1][0][1] = data.regist[1];
}

if (data[0] === 'move') {
  console.log("移動実行");
  move_c(data[1][0], data[1][1]);
}
if (data[0] === 'game_move') {
  console.log("マップ転換");
  game_move_c(data[1]);
}

if (data[0] === 'unrook') {

  unrook_c(data[1][0], data[1][1]);
}

if (data[0] === 'obtain') {
  obtain_c(data[1]);
}
if (data[0] === 'btn') {
  btn_c(data[1]);
}
if (data === "down_sun") {
  skills3.value[0][1]--;
}
  
  } /* catch (err) {
    console.error("46:　エラーが出ました");
  }
  }  */
  socket.onclose = () => console.log("切断");
}

let data = [[], [], [], []];
 

export function skillSet(x) {
  
  /* let skills_data = [[], [], [], []]; */
  let skills_data = {type: null, skills: [[], [], []], room: null};
      console.log("能力値設定が終わりました。", x);
      
    skills_data.type = 'skillsP' + x; 
     skills1.value[0].forEach((skill, index) => {
  skills_data.skills[0][index] = skills1.value[x - 1][index];
  
});

skills2.value[0].forEach((skill, index) => {
  skills_data.skills[1][index] = skills2.value[x - 1][index];
});

skills3.value[0].forEach((skill, index) => {
  skills_data.skills[2][index] = skills3.value[x - 1][index];
});

skills_data.room = roomNum.value;

      console.log(skills_data.skills);
      socket.send(JSON.stringify(skills_data));
      /* regist.value[0][0] = true; */
    };
  
let data_acter = {
  type: null,
  index: null,
  room: null,
  name: null
}

export function authority_gm(index) {
   /* data[0] = "gm";
  data[1] = index;
  data[2] = roomNum.value;
  data[3] = playerNames.value[index]; */
  data_acter.type = "gm";
  data_acter.index = index;
  data_acter.room = roomNum.value;
  data_acter.name = playerNames.value[index];
  console.log("GM:", data_acter);
  socket.send(JSON.stringify(data_acter));
};
export function authority_p1(index) {
  /* data[0] = "p1";
  data[1] = index;
  data[2] = roomNum.value;
  data[3] = playerNames.value[index]; */
  data_acter.type = "p1";
  data_acter.index = index;
  data_acter.room = roomNum.value;
  data_acter.name = playerNames.value[index];
  console.log("p1:", data_acter);
  socket.send(JSON.stringify(data_acter));
};
export function authority_p2(index) {
  data_acter.type = "p2";
  data_acter.index = index;
  data_acter.room = roomNum.value;
  data_acter.name = playerNames.value[index];
  console.log("p2:", data_acter);
  socket.send(JSON.stringify(data_acter));
};

export function ready() {
  console.log(regist_join.value);
  if (regist_join.value === false) {
    let data_ready = {
      type: "ready",
      room: roomNum.value
    }
    /* data[0] = 'ready';
    data[1] = roomNum.value; */
    socket.send(JSON.stringify(data_ready));
    /* regist_join.value = true; */
  } 

  else if(regist_join.value === true) {
    let data_ready = {
      type: "ready_not",
      room: roomNum.value
    }
    socket.send(JSON.stringify(data_ready));
    regist_join.value = false;
  }  
  
}

export const move = (level, index) => {
    let data = []
    data[0] = level;
    data[1] = index;
          /* let move_data = [];
          move_data[0] = level;
          move_data[1] = index; */
          let move_data = {
            type: "move",
            room: roomNum.value,
            data: data
          }
          console.log(move_data);
          /* data[0] = "move";
          data[1] = roomNum.value;
          data[2] = move_data; */
          socket.send(JSON.stringify(move_data));
          /* move_c(move_data[0], move_data[1]); */
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

export const unrook = (num1, num2) => {
    /* unrook_c(num1, num2); */
    /* let unrookdata = [];
    unrookdata[0] = num1;
    unrookdata[1] = num2;
    data[0] = "unrook";
    data[1] = roomNum.value;
    data[2] = unrookdata; */
    let unrook_data = {
      type: "unrook",
      unrook: [num1, num2],
      room: roomNum.value
    }
    socket.send(JSON.stringify(unrook_data));
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
          coment_c("セーブしました。")
          console.log(turns.value);
          save_data.value.unrook[0] = save_unrook;
          console.log(save_data.value.unrook[0]);
        }

export function save() {
  const data = save_data.value;
 let unrook_data = {
      type: "unrook",
      unrook: [5, data],
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
      type: "unrook",
      unrook: [4, data],
      room: roomNum.value
    }
  socket.send(JSON.stringify(unrook_data));
}
export function down_sun() {
  const down_data = {
    type: "down_sun",
    room: roomNum.value,
  }
  socket.send(JSON.stringify(down_data));
}
