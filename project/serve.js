import { playgames } from './playgame.js';
import { setting } from './setting.js';

import express from 'express';
import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import { authority } from './public/js/state.js';

const app = express();

app.use(express.static('./public'));

const server = createServer(app);

const wss = new WebSocketServer({
    server
});
export const rooms = [];
let num = 0;
const ipConnections = new Map();
const LIMIT_IP = 5;

const messageMap = new Map();
const LIMIT_MES = 20;
const WINDOW = 10000;

export function roomMembers(roomNun, data , exportSocket = null) {
   if (!rooms[roomNun]) return;
   rooms[roomNun].users.forEach((client) => {
      if (client.readyState === WebSocket.OPEN && client !== exportSocket) {
         client.send(JSON.stringify(data));
      }
   });
}

function heartbeat() {
  this.isAlive = true;
}

wss.on('connection', (ws, req) => {
    console.log(
        "接続:",
        req.socket.remoteAddress
    );
});

wss.on('connection', (ws, req) => {  
    try { 
   ws.isAlive = true;
   ws.on('pong', heartbeat);

          /* セキュリティ */
       const ip = req.socket.remoteAddress;
       console.log("IP", ipConnections, ip);
      const count = ipConnections.get(ip) || 0;
      console.log("カウント", count);

      
      if (count >= LIMIT_IP) {
         ws.close();
         console.log("アウトです！！");
      }
      ipConnections.set(ip, count + 1);

      ws.on("close", () => {
         const current = ipConnections.get(ip) || 1;
         const next = current - 1;

         if (next <= 0) {
            ipConnections.delete(ip);
         } else {
            ipConnections.set(ip, next);
         }

         messageMap.delete(ip);
      });

    ws.on('message', (message) => {    
      let mes;

try {
  mes = JSON.parse(message);
} catch (e) {
  ws.close();
  return;
}   

       const now = Date.now();
       if (!messageMap.has(ip)) {
         messageMap.set(ip, []);
       }
       console.log("メッセージマップ", messageMap);
      
       const logs = messageMap.get(ip);
       while (logs.length && now - logs[0] > WINDOW) {
         logs.shift();
       }
       console.log(logs);

       if (logs.length >= LIMIT_MES) {
         ws.close();
         console.log("アウトです");
         return;         
       }

       if (logs.length === 0) {
  messageMap.delete(ip);
}

       logs.push(now);

       if (typeof mes !== "object" || mes === null) {
    return;
  }

  // ③ 内容チェック
  if (typeof mes.type !== "string") {
    return;
  }
  console.log("86:",messageMap);
/* セキュ */ 
/* if(rooms[5] === undefined)
{
   console.log("30:ないです")
} */
    


        console.log('26:　メッセージを受け取りました。', mes);
         if (mes.type === "create") {
            console.log("36:",mes.password.length);
            /* パスワードが四ケタかつ、名前を一文字以上２０文字以内か判定 */
            if (mes.password.length === 4
               && mes.name.length >= 1 && mes.name.length <= 20
            ) {  
               num = 0;
               while(rooms[num] !== undefined) {
                  num++;
               };
               rooms[num] = {
               num: num,
               password: mes.password,
               users: new Set([ws]),
               skillsP1: [null, null, null],
               skillsP2: [null, null, null],
               authority: {
                  gm: null,
                  p1: null,
                  p2: null
               },
               check: 0,
               play:false,
               move:[null,null],
               time:[null,null]
            };

            ws.username = mes.name;
            

            let data = ["created", rooms[num].num, rooms[num].password, ws.username];
            ws.send(JSON.stringify(data));
            
            ws.roomNum = num;
            console.log("現在の部屋の人数",rooms[num].users.size);
            num = num + 1;
            rooms.forEach(room => {
               console.log(room);
            });
         } else {
            let note = [false, "", false, "note"];
            note[2] = true;
            if (mes.password.length !== 4 || mes.password.length === 0) note[1] = "※数字の四桁で書いてください";
            if (mes.name.length < 1 || mes.name.length > 20) note[0] = true;
            ws.send(JSON.stringify(note)); 
         }
         
         }  

         if (mes.type === "enter") {
            console.log("43：　パスワード認証を行います");
            console.log(mes.password, mes.room);
            if(rooms[mes.room] !== undefined){
             if (/* mes.password.length === 4
               && mes.name.length >= 1 && mes.name.length <= 20
               && */ mes.password === rooms[mes.room].password) {
                  if (rooms[mes.room].play === false ) {
                     rooms[mes.room].users.add(ws);
               ws.username = mes.name;
               ws.roomNum = mes.room;

               let data = ["entered", rooms[mes.room].num, rooms[mes.room].password];
               ws.send(JSON.stringify(data));

               const users = Array.from(rooms[mes.room].users)
                  .map((client) => client.username)
                  .filter(Boolean);
               data = ["names", users];
               roomMembers(mes.room, data);
               console.log("70:", data);
               console.log("現在の部屋の人数",rooms[mes.room].users.size);
                  } else {
                     console.log("プレイ中です");
                     rooms[mes.room].users.add(ws);
                     console.log(rooms[mes.room]);
                     let data = ["re_ready", mes.room];
                     ws.username = mes.name;
                     ws.roomNum = mes.room; 
                     ws.send(JSON.stringify(data));
                  }
                
            } else {
               let note = [false, "", false, "note"];
            note[2] = true;
            if (mes.password !== rooms[mes.room].password) note[1] = "パスワードが違います。" ;
            if (mes.name.length < 1 || mes.name.length > 20) note[0] = true; 

            ws.send(JSON.stringify(note)); 
            }
         } else {
            console.log("34;エラー検知");
         }
         }

         if(mes.type === "re_ready") {
            console.log(rooms[mes.room].authority);
            if(mes.author === "GM" && 
               rooms[mes.room].authority.gm === null) {
               re_send();
               rooms[mes.room].authority.gm = ws.username;
            }
            else if(mes.author === "P1" && 
               rooms[mes.room].authority.p1 === null) {
               re_send();
               rooms[mes.room].authority.p1 = ws.username;
            }
            else if(mes.author === "P2" && 
               rooms[mes.room].authority.p2 === null) {
               re_send();
               rooms[mes.room].authority.p2 = ws.username;
            } else {
               console.log("それは選択できません");
            }
            function re_send() {
               let re_data = {
               type:"re_enter",
               move:[rooms[mes.room].move[0],rooms[mes.room].move[1]],
               time:[rooms[mes.room].time[0], rooms[mes.room].time[1]],
               authority: mes.author
            }
            console.log(re_data);
            console.log(mes.room, re_data);
            ws.send(JSON.stringify(re_data));
            };
            
         }
        
         if (rooms[mes.room] !== undefined) {
            setting(ws, mes);
            playgames(mes, rooms);
         } else {
            console.log("35:エラー検知");
         }
      }
     ) } catch (err) {
         console.log("57:　エラーが出ました");
         if (mes[2] > num + 1) {
            ws.send(JSON.stringify("more"));
         }
      } 
       ws.on("close", () => {
         const num = ws.roomNum;
         if (num === undefined) {
            return;
         }
         if (!rooms[num]) {
            return;
         }
         rooms[num].users.delete(ws);

    console.log(`部屋 ${num} の現在の人数`, rooms[num].users.size);
    console.log("抜けた名前：",ws.username);

    if (rooms[num].play === true) {
      if(rooms[num].authority.gm === ws.username) rooms[num].authority.gm = null;
      if(rooms[num].authority.p1 === ws.username) rooms[num].authority.p1 = null;
      if(rooms[num].authority.p2 === ws.username) rooms[num].authority.p2 = null;
     }
    if (rooms[num].users.size === 0) {
        console.log(`部屋 ${num} の人数が0人になりました`);
        delete rooms[num];
    }
       })         
    });
   ;

    setInterval(() => {
      wss.clients.forEach((ws) => {
         if (!ws.isAlive) return ws.terminate();
         ws.isAlive = false;
         ws.ping();
         console.log("192: 生きているか");
      });

    }, 3000);
   
    server.listen(3000, '0.0.0.0', () => {
    console.log('Server Start');
});