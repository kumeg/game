import { skills1, skills2, skills3, roomNum, playerNames, regist_join } from "./state.js";

import { socket } from "./socket.js";

let data_acter = {
  type: null,
  index: null,
  room: null,
  name: null
}

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

export function authority_gm(index) {
  data_acter.type = "gm";
  data_acter.index = index;
  data_acter.room = roomNum.value;
  data_acter.name = playerNames.value[index];
  console.log("GM:", data_acter);
  socket.send(JSON.stringify(data_acter));
};
export function authority_p1(index) {
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

export function skillSet(x) {
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