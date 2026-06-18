import { playgames } from './playgame.js';
import { setting } from './setting.js';
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 5501,
   host: '0.0.0.0'
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
   /* try { */
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



        console.log('26:　メッセージを受け取りました。', mes);
         if (mes.type === "create") {
            /* パスワードが四ケタかつ、名前を一文字以上２０文字以内か判定 */
            if (mes.password.length === 4
               && mes.name.length >= 1 && mes.name.length <= 20
            ) {  
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
               check: 0
            };

            ws.username = mes.name;

            let data = ["created", rooms[num].num, rooms[num].password, ws.username];
            ws.send(JSON.stringify(data));
            num = num + 1
         } else {
            let note = [false, "", false, "note"];
            note[2] = true;
            if (mes.password.length !== 4) note[1] = "※数字の四桁で書いてください";
            if (mes.name.length < 1 || mes.name.length > 20) note[0] = true;
            ws.send(JSON.stringify(note)); 
         }
         }  

         if (mes.type === "enter") {
            console.log("43：　パスワード認証を行います");
            console.log(mes.password, mes.room);
             if (/* mes.password.length === 4
               && mes.name.length >= 1 && mes.name.length <= 20
               && */ mes.password === rooms[mes.room].password) {
                rooms[mes.room].users.add(ws);
               ws.username = mes.name;

               let data = ["entered", rooms[mes.room].num, rooms[mes.room].password];
               ws.send(JSON.stringify(data));

               const users = Array.from(rooms[mes.room].users)
                  .map((client) => client.username)
                  .filter(Boolean);
               data = ["names", users];
               roomMembers(mes.room, data);
               console.log("70:", data);
               
            } else {
               let note = [false, "", false, "note"];
            note[2] = true;
            if (mes.password !== rooms[mes.room].password) note[1] = "パスワードが違います。" ;
            if (mes.name.length < 1 || mes.name.length > 20) note[0] = true; 
            ws.send(JSON.stringify(note)); 
            }
         }

        

         setting(ws, mes);

         

         playgames(mes);

         
     /*  } catch (err) {
         console.log("57:　エラーが出ました");
         if (mes[2] > num + 1) {
            ws.send(JSON.stringify("more"));
         }
      } */
                
    });
    });

    setInterval(() => {
      wss.clients.forEach((ws) => {
         if (!ws.isAlive) return ws.terminate();
         ws.isAlive = false;
         ws.ping();
         console.log("192: 生きているか");
      });
    }, 30000);
    console.log('サーバーが開きました。:ws://localhost:3000')