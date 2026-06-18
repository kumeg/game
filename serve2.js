import { playgames } from './playgame.js';
import { setting } from './setting.js';
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 4000 });
export const rooms = [];
let num = 0;
export let mes = [];
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

wss.on('connection', (ws, req) => {  
   /* try { */

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
      });

    ws.on('message', (message) => {    
       mes = JSON.parse(message);   

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
/* セキュ */



        console.log('26:　メッセージを受け取りました。', mes);
         if (mes[0] === "create") {
            if (mes[1].length === 4
               && mes[2].length >= 1 && mes[2].length <= 20
            ) {  
               rooms[num] = {
               num: num,
               password: mes[1],
               users: new Set([ws]),
               skillsP1: [null, null, null],
               skillsP2: [null, null, null],
               authority: {
                  gm: null,
                  p1: null,
                  p2: null
               },
               check: 0
            };

            ws.username = mes[2];

            let data = ["created", rooms[num].num, rooms[num].password, ws.username];
            ws.send(JSON.stringify(data));
            num = num + 1
         } else {
            let note = [false, "", false, "note"];
            note[2] = true;
            if (mes[1].length !== 4) note[1] = "※数字の四桁で書いてください";
            if (mes[2].length < 1 || mes[2].length > 20) note[0] = true;
            ws.send(JSON.stringify(note)); 
         }
         }  

         if (mes[0] === "enter") {
            console.log("43：　パスワード認証を行います");
             if (mes[3].length === 4
               && mes[1].length >= 1 && mes[1].length <= 20
               && mes[3] === rooms[mes[2]].password) {
                rooms[mes[2]].users.add(ws);
               ws.username = mes[1];

               let data = ["entered", rooms[mes[2]].num, rooms[mes[2]].password];
               ws.send(JSON.stringify(data));

               const users = Array.from(rooms[mes[2]].users)
                  .map((client) => client.username)
                  .filter(Boolean);
               data = ["names", users];
               roomMembers(mes[2], data);
               console.log("70:", data);
               
            } else {
               let note = [false, "", false, "note"];
            note[2] = true;
            if (mes[3] !== rooms[mes[2]].password) note[1] = "パスワードが違います。" ;
            if (mes[1].length < 1 || mes[1].length > 20) note[0] = true;
            ws.send(JSON.stringify(note)); 
            }
         }

        

         setting(ws);

         

         playgames();

         
     /*  } catch (err) {
         console.log("57:　エラーが出ました");
         if (mes[2] > num + 1) {
            ws.send(JSON.stringify("more"));
         }
      } */
                
    });
    });

    console.log('サーバーが開きました。:ws://localhost:3000')