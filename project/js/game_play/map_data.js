import { diferent_screen_c } from "./map.js";
import { move }
from "../socket.js";

export function getRoom() {
      return [
        
  [// room1（位置修正済）
    { id: 0, x: 285, y: 265, w: 75,  h: 75,  color: "rgba(255,0,0,0.2)", type: 1 },

    // room2
    { id: 1, x: 235, y: 145, w: 200, h: 115, color: "rgba(0,0,255,0.2)", type: 2 },

    // room3
    { id: 2, x: 75,  y: 45,  w: 160, h: 320, color: "rgba(0,255,0,0.2)", type: 3 },

    // room4
    { id: 3, x: 435, y: 125, w: 135, h: 255, color: "rgba(255,255,0,0.25)", type: 4 },

    // room5（位置修正済）
    { id: 4, x: 575, y: 305, w: 75,  h: 135, color: "rgba(160,0,255,0.25)", type: 5 }
  ],
  [
      // room1（位置修正済）
      { id: 0, x: 305, y: 260, w: 75,  h: 75,  color: "rgba(255,0,0,0.2)", type: 1 },

      // room2
      { id: 1, x: 235, y: 185, w: 170, h: 75, color: "rgba(0,0,255,0.2)", type: 2 },

      // room3
      { id: 2, x: 75,  y: 155,  w: 160, h: 170, color: "rgba(0,255,0,0.2)", type: 3 },

      // room4
      { id: 3, x: 405, y: 165, w: 175, h: 205, color: "rgba(255,255,0,0.25)", type: 4 },

      // room5（位置修正済）
      { id: 4, x: 425, y: 50, w: 55,  h: 135, color: "rgba(160,0,255,0.25)", type: 5 },

      { id: 5, x: 285, y: 25, w: 135,  h: 135, color: "rgba(0, 140, 255, 0.25)", type: 6 },

      { id: 6, x: 485, y: 25, w: 135,  h: 135, color: "rgba(47, 255, 0, 0.25)", type: 7 }
    ]
      ]
};

export function getBtns() {        
          // (class名,向かう場所(関数いれる),ボタンを表示させる場所,表示させるものボタン非表示)
         return [
          [//0
          { number: 1, classname: "Btn1", go: () =>move(0, 1), typeIndex: 0, display: "↑"},
          //1
          { number: 2, classname: "Btn2", go: () => move(0, 2), typeIndex: 1, display: "←"},
          { number: 3, classname: "Btn3", go: () =>move(0, 3), typeIndex: 1, display: "→"},
          { number: 4, classname: "Btn1", go: () =>move(0, 0), typeIndex: 1, display: "↓"},
          //2
          { number: 5, classname: "Btn2", go: () =>move(0, 1), typeIndex: 2, display: "→"},
          //3
          { number: 4, classname: "Btn3", go: () =>move(0, 1), typeIndex: 3, display: "←"},
          { number: 4, classname: "Btn4", go: () =>move(0, 4), typeIndex: 3, display: "→"},
          //4
          { number: 4, classname: "Btn4", go: () =>move(0, 3), typeIndex: 4, display: "←"}
        ],
        [
          /* 赤 */
          { number: 1, classname: "Btn1", go: () =>move(1, 1), typeIndex: 0, display: "↑"},
          { number: 1, classname: "Btn2", go: () => diferent_screen_c(0), typeIndex: 0, display: "aiu"},

          /* 紺色 */
          { number: 2, classname: "Btn2", go: () =>move(1, 2), typeIndex: 1, display: "←"},
          { number: 3, classname: "Btn3", go: () =>move(1, 3), typeIndex: 1, display: "→"},
          { number: 4, classname: "Btn1", go: () =>move(1, 0), typeIndex: 1, display: "→"},

          /* 左みどり */
          { number: 5, classname: "Btn2", go: () =>move(1, 1), typeIndex: 2, display: "→"},

          /* 黄色 */
          { number: 5, classname: "Btn3", go: () =>move(1, 1), typeIndex: 3, display: "←"},
          { number: 5, classname: "Btn2_4", go: () =>move(1, 4), typeIndex: 3, display: "↑"},

          /* 紫 */
          { number: 5, classname: "Btn2_4", go: () =>move(1, 3), typeIndex: 4, display: "↓"},
          { number: 5, classname: "Btn2_5", go: () =>move(1, 5), typeIndex: 4, display: "←"},
          { number: 5, classname: "Btn2_6", go: () =>move(1, 6), typeIndex: 4, display: "→"},

          /* 薄い青 */
          { number: 5, classname: "Btn2_5", go: () =>move(1, 4), typeIndex: 5, display: "→"},

          /* 右みどり */
          { number: 5, classname: "Btn2_6", go: () =>move(1, 4), typeIndex: 6, display: "←"},
        ]
        ];}