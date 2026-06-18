import { roomMembers, rooms } from "./serve.js";
export function setting(ws, mes) {
if (mes.type === 'skillsP1') {
            console.log("79: スキルの登録");
             for(let i = 0; i < 3; i++) {
               rooms[mes.room].skillsP1[i] = mes.skills[0][i];
            }; 
            for(let i = 3; i < 6; i++) {
               rooms[mes.room].skillsP1[i] = mes.skills[1][i - 3];
            }
            for(let i = 6; i < 9; i++) {
               rooms[mes.room].skillsP1[i] = mes.skills[2][i - 6];
            }
            let data = [];
            data[0] = 'skillsP1';
            data[1] = rooms[mes.room].skillsP1;
            console.log("93:", data);
            roomMembers(mes.room, data);
         }
if (mes.type === 'skillsP2') {
            console.log("79: スキルの登録2");
             for(let i = 0; i < 3; i++) {
               rooms[mes.room].skillsP2[i] = mes.skills[0][i];
            }; 
            for(let i = 3; i < 6; i++) {
               rooms[mes.room].skillsP2[i] = mes.skills[1][i - 3];
            }
            for(let i = 6; i < 9; i++) {
               rooms[mes.room].skillsP2[i] = mes.skills[2][i - 6];
            }
            let data = [];
            data[0] = 'skillsP2';
            data[1] = rooms[mes.room].skillsP2;
            console.log("93:", data);
            roomMembers(mes.room, data);
         }
if (mes.type === 'gm') {
   
            rooms[mes.room].authority.gm = mes.name;
            let data = [];
            data[0] = mes.type;
            data[1] = mes.index;
            roomMembers(mes.room, data);
            console.log("125:", rooms[mes.room].authority.gm);
         }

         if (mes.type === 'p1') {
            console.log("起動P1");
            rooms[mes.room].authority.p1 = mes.name;
            let data = [];
            data[0] = mes.type;
            data[1] = mes.index;
            roomMembers(mes.room, data);
            console.log("54:", data);
         }

         if (mes.type === 'p2') {
            rooms[mes.room].authority.p2 = mes.name;
            let data = [];
            data[0] = mes.type;
            data[1] = mes.index;
            roomMembers(mes.room, data);
            console.log(data);
         }
                   
          if (mes.type === 'ready') {
            console.log("149: 遊ぶ準備の確認を行います。");

            if (rooms[mes.room].authority.gm !== null && rooms[mes.room].authority.p1 !== null
               && rooms[mes.room].authority.p2 !== null
            ) {
               const data = {
                  type: "regist_1",
                  regist: ["green", "○"]
               }
               ws.send(JSON.stringify(data)); 
               console.log("７７：登録")
            }
            if (rooms[mes.room].authority.gm !== null) {
               if (rooms[mes.room].authority.p1 !== null) {
                  if (rooms[mes.room].authority.p2 !== null) {
                     if (rooms[mes.room].skillsP1[0] !== null) {
                        if (rooms[mes.room].skillsP2[0] !== null) {
                           if (rooms[mes.room].check < 4) {
                              ws.send(JSON.stringify('check_OK'));
                              rooms[mes.room].check += 1;
                           }
                           if (rooms[mes.room].check === 3) {
                              let data = [];
                              data[0] = "check_go";
                              data[1] = rooms[mes.room].authority;
                              console.log(data);
                              roomMembers(mes.room, data);
                           }
                        }
                     }                     
                  }
               }
            }
         }

         if (mes.type === 'ready_not') {
            rooms[mes.room].check -= 1;
             
            ws.send(JSON.stringify('ready_not'));
         }
        }