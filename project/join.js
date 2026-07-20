import { mes, roomMembers, rooms, data_join } from "./serve.js";
export function join(ws) {
if (mes[0] === "enter") {
            console.log("43：　パスワード認証を行います");
             if (mes[3].length === 4
               && mes[1].length >= 1 && mes[1].length <= 20
               && mes[3] === rooms[mes[2]].password) {
                rooms[mes[2]].users.add(ws);
               ws.username = mes[1];

               data_join = ["entered", rooms[mes[2]].num, rooms[mes[2]].password];
               ws.send(JSON.stringify(data_join));

               const users = Array.from(rooms[mes[2]].users)
                  .map((client) => client.username)
                  .filter(Boolean);
               data_join = ["names", users];
               roomMembers(mes[2], data_join);
               console.log("70:", data_join);
               
            } else {
               let note = [false, "", false, "note"];
            note[2] = true;
            if (mes[3] !== rooms[mes[2]].password) note[1] = "パスワードが違います。" ;
            if (mes[1].length < 1 || mes[1].length > 20) note[0] = true;
            ws.send(JSON.stringify(note)); 
            }
         }
        }