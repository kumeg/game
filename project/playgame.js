import { roomMembers } from "./serve.js";
export function playgames(mes) {
   
if (mes.type === "move") {
   console.log("kidou");
            let data = [];
            data[0] = "move";
            data[1] = mes.data;
            console.log(data);
            roomMembers(mes.room, data);
         }
if (mes.type === "game_move") {
   let data = [];
   data[0] = "game_move";
   data[1] = mes.num;
   console.log("マップ転換");
   roomMembers(mes.room, data);
}
if (mes.type === "unrook") {
   let data = [];
   data[0] = "unrook";
   data[1] = mes.unrook;
   roomMembers(mes.room, data);
   console.log("２４：開錠")
}
if (mes.type === "obtain") {
   let data = [];
   data[0] = "obtain";
   data[1] = mes.index;
   roomMembers(mes.room, data);
}
if (mes.type === "btn") {
   console.log("さくじょしました")
   let data = [];
   data[0] = "btn";
   data[1] = mes.index;
   roomMembers(mes.room, data);
}
if (mes.type === "down_sun") {
   roomMembers(mes.room, "down_sun");
}
if (mes.type === "share") {
   roomMembers(mes.room, mes.data);
}
        }