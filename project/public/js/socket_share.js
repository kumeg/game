import { load_c, save_c } from "./share_func.js";

import { skills1, skills2, skills3, skill_on, regist, authority, my_name, attention } from "./state.js";

import { obtain_c, btn_c } from "./game_play/inventory.js";

import { unrook_c, game_move_c, move_c } from "./game_play/map.js";

import { phase_Change } from "./ui.js";

import { titleBGM_e } from "./audio.js";

export function set_regist(data) {

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
    }

    if (data.type === "regist_1") {
        console.log("登録")
        console.log(regist.value);
        regist.value[1][0][0] = data.regist[0];
        regist.value[1][0][1] = data.regist[1];
    }
}

export function share(data) {
    if (data[0] === 'move') {
        move_c(data[1][0], data[1][1]);
    }
    if (data[0] === 'game_move') {
        game_move_c(data[1]);
    }
    if (data[0] === 'unrook') {
        unrook_c(data[1][0], data[1][1]);
    }
    if (data[0] === 'btn') {
        btn_c(data[1]);
    }
    if (data[0] === 'obtain') {
        obtain_c(data[1]);
    }
    if (data[0] === "load") {
        load_c();
    }
    if (data[0] === "save") {
        save_c();
    }
    if (data === "down_sun") {
        skills3.value[0][1]--;
    }
}